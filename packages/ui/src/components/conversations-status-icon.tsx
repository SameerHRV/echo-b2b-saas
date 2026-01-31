import { ArrowRightIcon, ArrowUpIcon, CheckIcon } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

interface ConversationStatusIconProp {
  status: "pending" | "completed" | "failed";
}

const statusConfig = {
  completed: {
    icon: CheckIcon,
    bgColor: "bg-[#3fb62f]",
  },
  failed: {
    icon: ArrowRightIcon,
    bgColor: "bg-destructive",
  },
  pending: {
    icon: ArrowUpIcon,
    bgColor: "bg-yellow-500",
  },
} as const;

export const ConversationStateIcon = ({
  status,
}: ConversationStatusIconProp) => {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full p-1.5",
        config.bgColor,
      )}
    >
      <Icon className="size-3 stroke-3 text-white" />
    </div>
  );
};
