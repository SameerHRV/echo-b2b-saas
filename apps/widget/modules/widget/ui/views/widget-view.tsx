"use client";

import { useAtomValue } from "jotai";
import { WidgetScreen } from "../../../types";
import { screenAtom } from "../../atoms/widget-atoms";
import { WidgetChatScreen } from "../screens/widget-chat-screen";
import { WidgetErrorScreen } from "../screens/widget-error-screen";
import { WidgetInboxScreen } from "../screens/widget-inbox-screen";
import { WidgetLoadingScreen } from "../screens/widget-loading-screen";
import { WidgetAuthScreen } from "../screens/widget-screen";
import { WidgetSelectionScreen } from "../screens/widget-selection-screen";

interface WidgetViewProps {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: WidgetViewProps) => {
  const screen = useAtomValue(screenAtom);

  const screenComponents: Record<WidgetScreen, React.ReactNode> = {
    error: <WidgetErrorScreen />,
    loading: <WidgetLoadingScreen organizationId={organizationId} />,
    selection: <WidgetSelectionScreen />,
    chat: <WidgetChatScreen />,
    auth: <WidgetAuthScreen />,
    contact: <p>Contact Screen</p>,
    voice: <p>Voice Screen</p>,
    inbox: <WidgetInboxScreen />,
  };

  return (
    <main className="min-h-screen min-w-screen h-full w-full flex flex-col overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
    </main>
  );
};
