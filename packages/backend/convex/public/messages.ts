import { saveMessage } from "@convex-dev/agent";
import { paginationOptsValidator } from "convex/server";
import { ConvexError, v } from "convex/values";
import { components, internal } from "../_generated/api";
import { action, query } from "../_generated/server";
import { supportAgent } from "../system/ai/agents/supportAgent";
import { escalateConversation } from "../system/ai/tools/escalateConversation";
import { resolveConversation } from "../system/ai/tools/resolveConversation";

export const createMessages = action({
  args: {
    prompt: v.string(),
    threadId: v.string(),
    contactSessionId: v.id("contactSession"),
  },
  handler: async (ctx, args) => {
    const contactSession = await ctx.runQuery(
      internal.system.contactSessions.getOne,
      {
        contactSessionId: args.contactSessionId,
      },
    );

    if (!contactSession || contactSession.expiresAt < Date.now()) {
      throw new ConvexError({
        code: "CONTACT_SESSION_NOT_FOUND_OR_EXPIRED",
        message: "Contact session not found or expired",
      });
    }

    const conversation = await ctx.runQuery(
      internal.system.conversations.getByThreadId,
      {
        threadId: args.threadId,
      },
    );

    if (!conversation) {
      throw new ConvexError({
        code: "CONVERSATION_NOT_FOUND",
        message: "Conversation not found",
      });
    }

    if (conversation.status === "resolved") {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: "Conversation resolved",
      });
    }

    // TODO: Implement Subscription check
    const shouldTriggresAgent = conversation.status === "unresolved";

    if (shouldTriggresAgent) {
      await supportAgent.generateText(
        ctx,
        {
          threadId: args.threadId as any,
        },
        {
          prompt: args.prompt,
          tools: {
            resolveConversation,
            escalateConversation,
          },
        },
      );
    } else {
      await saveMessage(ctx, components.agent, {
        threadId: args.threadId as any,
        prompt: args.prompt,
      });
    }
  },
});

export const getManyMessages = query({
  args: {
    threadId: v.string(),
    paginationOpts: paginationOptsValidator,
    contactSessionId: v.id("contactSession"),
  },
  handler: async (ctx, args) => {
    const contactSession = await ctx.db.get(args.contactSessionId);

    if (!contactSession || contactSession.expiresAt < Date.now()) {
      throw new ConvexError({
        code: "CONTACT_SESSION_NOT_FOUND_OR_EXPIRED",
        message: "Contact session not found or expired",
      });
    }

    const paginated = await supportAgent.listMessages(ctx, {
      threadId: args.threadId as any,
      paginationOpts: args.paginationOpts,
    });

    return paginated;
  },
});
