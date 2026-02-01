import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable";
import { ConversationPanel } from "../components/conversation-panel";

export const ConversationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ResizablePanelGroup className="h-full flex" orientation="horizontal">
      <ResizablePanel defaultSize={100} maxSize={300} minSize={20}>
        <ConversationPanel />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={70} className="h-full">
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
