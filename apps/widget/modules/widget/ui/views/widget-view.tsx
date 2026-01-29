"use client";

import { WidgetFooter } from "../components/widget-footer";
import { WidgetHeader } from "../components/widget-header";

interface WidgetViewProps {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: WidgetViewProps) => {
  return (
    <main className="min-h-screen min-w-screen h-full w-full flex flex-col overflow-hidden rounded-xl border bg-muted">
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-6">
          <p className="text-3xl">Hi there! 👋</p>
          <p className="text-lg">How can I help you today?</p>
        </div>
      </WidgetHeader>
      <div className="flex-1 overflow-y-auto">Content</div>
      <WidgetFooter />
    </main>
  );
};
