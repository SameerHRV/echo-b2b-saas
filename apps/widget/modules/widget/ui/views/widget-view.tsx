"use client";

import { useAtomValue } from "jotai";
import { WidgetScreen } from "../../../types";
import { screenAtom } from "../../atoms/widget-atoms";
import { WidgetAuthScreen } from "../screens/widget-screen";

interface WidgetViewProps {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: WidgetViewProps) => {
  const screen = useAtomValue(screenAtom);

  const screenComponents: Record<WidgetScreen, React.ReactNode> = {
    error: <p>Error Screen</p>,
    loading: <p>Loading Screen</p>,
    selection: <p>Selection Screen</p>,
    chat: <p>Chat Screen</p>,
    auth: <WidgetAuthScreen />,
    contact: <p>Contact Screen</p>,
    voice: <p>Voice Screen</p>,
    inbox: <p>Inbox Screen</p>,
  };

  return (
    <main className="min-h-screen min-w-screen h-full w-full flex flex-col overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
    </main>
  );
};
