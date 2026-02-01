import { createTool } from "@convex-dev/agent";
import z from "zod";
import { internal } from "../../../_generated/api";
import { supportAgent } from "../agents/supportAgent";
import { ConvexError } from "convex/values";

export const resolveConversation = createTool({
  description: "Resolved a Conversation",
  args: z.object({}),
  handler: async (ctx, args) => {
    if (!ctx.threadId) {
      throw new ConvexError({
        code: "Unauthorized",
        message: "Unauthorized",
      });
    }

    await ctx.runMutation(internal.system.conversations.resolve, {
      threadId: ctx.threadId,
    });

    await supportAgent.saveMessage(ctx, {
      threadId: ctx.threadId,
      message: {
        role: "assistant",
        content: "Conversation resolved",
      },
    });

    return "Conversation resolved";
  },
});
