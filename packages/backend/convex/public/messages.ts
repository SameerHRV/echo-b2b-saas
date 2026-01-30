import { internal } from "../_generated/api";
import { action, query } from "../_generated/server";
import { ConvexError, v } from "convex/values";
import { supportAgent } from "../system/ai/agents/supportAgent";
import { useQuery } from "convex/react";
import { paginationOptsValidator } from "convex/server";

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

    if (conversation.status === "completed") {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: "Conversation completed",
      });
    }

    // TODO: Implement Subscription check

    await supportAgent.generateText(
      ctx,
      {
        threadId: args.threadId as any,
      },
      {
        prompt: args.prompt,
      },
    );
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
