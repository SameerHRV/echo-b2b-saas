"use client";

import { api } from "@workspace/backend/_generated/api";
import { Id } from "@workspace/backend/_generated/dataModel";
import { Button } from "@workspace/ui/components/button";
import { useMutation, useQuery } from "convex/react";
import { MoreHorizontalIcon, Wand2Icon } from "lucide-react";
import { useThreadMessages, toUIMessages } from "@convex-dev/agent/react";

import {
  AIConversation,
  AIConversationContent,
  AIConversationScrollButton,
} from "@workspace/ui/components/ai/conversation";
import {
  AIInput,
  AIInputSubmit,
  AIInputTextarea,
  AIInputToolbar,
  AIInputTools,
  AIInputButton,
} from "@workspace/ui/components/ai/input";
import {
  AIMessage,
  AIMessageContent,
} from "@workspace/ui/components/ai/message";
import { AIResponse } from "@workspace/ui/components/ai/response";
import { Form, FormField } from "@workspace/ui/components/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DicebareAvatar } from "@workspace/ui/components/dicebare-avatar";

const formSchema = z.object({
  message: z.string().min(1, "Message is required"),
});

export const ConversationIdView = ({
  conversationId,
}: {
  conversationId: Id<"conversation">;
}) => {
  const conversation = useQuery(api.private.conversations.getOneConversation, {
    conversationId,
  });

  const messages = useThreadMessages(
    api.private.messages.getManyMessages,
    conversation?.threadId ? { threadId: conversation.threadId } : "skip",
    {
      initialNumItems: 10,
    },
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const createMessage = useMutation(api.private.messages.createMessages);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await createMessage({
        conversationId,
        prompt: values.message,
      });

      form.reset();
    } catch {
      console.error("Failed to create message");
    }
  };

  return (
    <div className="flex h-full flex-col bg-muted">
      <header className="flex items-center justify-between border-b bg-background p-2.5">
        <Button size={"sm"} variant={"ghost"}>
          <MoreHorizontalIcon className="size-4" />
        </Button>
      </header>

      <AIConversation className="max-h-[calc(100vh-180px)]">
        <AIConversationContent>
          {toUIMessages(messages.results ?? []).map((message) => (
            <AIMessage
              key={message.id}
              from={message.role === "user" ? "assistant" : "user"}
            >
              <AIMessageContent>
                <AIResponse>{message.text}</AIResponse>
              </AIMessageContent>
              {message.role === "user" && (
                <DicebareAvatar
                  seed={conversation?.contactSessionId as "user"}
                  size={32}
                />
              )}
            </AIMessage>
          ))}
        </AIConversationContent>
        <AIConversationScrollButton />
      </AIConversation>

      <div className="p-2">
        <Form {...form}>
          <AIInput onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="message"
              disabled={conversation?.status === "resolved"}
              render={({ field }) => (
                <AIInputTextarea
                  {...field}
                  disabled={
                    conversation?.status === "resolved" ||
                    form.formState.isSubmitting
                    //TODO: OR Enhancing Props
                  }
                  onChange={field.onChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      form.handleSubmit(onSubmit)();
                    }
                  }}
                  placeholder={
                    conversation?.status === "resolved"
                      ? "Conversation resolved"
                      : "Type your message here"
                  }
                  value={field.value}
                />
              )}
            />
            <AIInputToolbar>
              <AIInputTools>
                <AIInputButton>
                  <Wand2Icon className="size-4" />
                  <span>Enhance</span>
                </AIInputButton>
              </AIInputTools>
              <AIInputSubmit
                disabled={
                  conversation?.status === "resolved" ||
                  !form.formState.isValid ||
                  form.formState.isSubmitting
                }
                status="ready"
                type="submit"
              />
            </AIInputToolbar>
          </AIInput>
        </Form>
      </div>
    </div>
  );
};
