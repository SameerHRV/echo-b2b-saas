import { google } from "@ai-sdk/google";
import { Agent } from "@convex-dev/agent";
import { components } from "../../../_generated/api";

export const supportAgent = new Agent(components.agent, {
  languageModel: google("gemini-2.5-flash"),
  name: "Support Agent",
  instructions: `You are a customer support agent. Use "resolveConversation" tool when user express satisfaction. Use "escalateConversation" tool when user express frustration or requirement for human intervention.`,
});
