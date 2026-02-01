import { ConversationIdView } from "@/modules/dashboard/views/conversation-id-view";
import { Id } from "@workspace/backend/_generated/dataModel";
import React from "react";

const Page = async ({
  params,
}: {
  params: Promise<{
    conversationId: string;
  }>;
}) => {
  const { conversationId } = await params;

  return (
    <ConversationIdView conversationId={conversationId as Id<"conversation">} />
  );
};

export default Page;
