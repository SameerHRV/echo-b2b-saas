import { google } from "@ai-sdk/google";
import { saveMessage } from "@convex-dev/agent";
import { generateText } from "ai";
import { paginationOptsValidator } from "convex/server";
import { ConvexError, v } from "convex/values";
import { components } from "../_generated/api";
import { action, mutation, query } from "../_generated/server";
import { supportAgent } from "../system/ai/agents/supportAgent";

export const enhanceRespons = action({
  args: {
    prompt: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Identity not found",
      });
    }

    const orgId = identity.orgId as string;

    if (!orgId) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Organization ID not found",
      });
    }

    const respons = await generateText({
      model: google("gemini-2.5-flash"),
      messages: [
        {
          role: "system",
          content:
            "Enhance the given response to make it more engaging and helpful and to more professional, clearn and helpful while maintaining the original meaning and key information.",
        },
        {
          role: "user",
          content: args.prompt,
        },
      ],
    });

    return respons.text;
  },
});

export const createMessages = mutation({
  args: {
    prompt: v.string(),
    conversationId: v.id("conversation"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Identity not found",
      });
    }

    const orgId = identity.orgId as string;

    if (!orgId) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Organization ID not found",
      });
    }

    const conversation = await ctx.db.get(args.conversationId);

    if (!conversation) {
      throw new ConvexError({
        code: "CONVERSATION_NOT_FOUND",
        message: "Conversation not found",
      });
    }

    if (conversation.organizationId !== orgId) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Organization ID not found",
      });
    }

    if (conversation.status === "resolved") {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: "Conversation resolved",
      });
    }

    if (conversation.status === "unresolved") {
      await ctx.db.patch(args.conversationId, {
        status: "escalated",
      });
    }

    await saveMessage(ctx, components.agent, {
      threadId: conversation.threadId,
      agentName: identity.familyName,
      message: {
        role: "user",
        content: args.prompt,
      },
    });
  },
});

export const getManyMessages = query({
  args: {
    threadId: v.string(),
    paginationOpts: paginationOptsValidator,
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Identity not found",
      });
    }

    const orgId = identity.orgId as string;

    if (!orgId) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Organization ID not found",
      });
    }

    const conversation = await ctx.db
      .query("conversation")
      .withIndex("by_thread_id", (q) => q.eq("threadId", args.threadId))
      .unique();

    if (!conversation) {
      throw new ConvexError({
        code: "CONVERSATION_NOT_FOUND",
        message: "Conversation not found",
      });
    }

    if (conversation.organizationId !== orgId) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Organization ID not found",
      });
    }

    const paginated = await supportAgent.listMessages(ctx, {
      threadId: args.threadId as any,
      paginationOpts: args.paginationOpts,
    });

    return paginated;
  },
});
