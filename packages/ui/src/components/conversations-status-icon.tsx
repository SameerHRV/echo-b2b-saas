import { cn } from "@workspace/ui/lib/utils";
import { AlertCircleIcon, CheckIcon, ClockIcon } from "lucide-react";

interface ConversationStatusIconProp {
  status:
    | "resolved"
    | "unresolved"
    | "escalated"
    | "pending"
    | "completed"
    | "failed";
}

const statusConfig = {
  // New status values
  resolved: {
    icon: CheckIcon,
    bgColor: "bg-[#3fb62f]",
  },
  escalated: {
    icon: AlertCircleIcon,
    bgColor: "bg-destructive",
  },
  unresolved: {
    icon: ClockIcon,
    bgColor: "bg-yellow-500",
  },
  // Legacy status values for backward compatibility
  completed: {
    icon: CheckIcon,
    bgColor: "bg-[#3fb62f]",
  },
  failed: {
    icon: AlertCircleIcon,
    bgColor: "bg-destructive",
  },
  pending: {
    icon: ClockIcon,
    bgColor: "bg-yellow-500",
  },
} as const;

export const ConversationStateIcon = ({
  status,
}: ConversationStatusIconProp) => {
  const config = statusConfig[status];

  // Fallback configuration for unknown statuses
  if (!config) {
    return (
      <div className="flex items-center justify-center rounded-full p-1.5 bg-gray-500">
        <ClockIcon className="size-3 stroke-3 text-white" />
      </div>
    );
  }

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
