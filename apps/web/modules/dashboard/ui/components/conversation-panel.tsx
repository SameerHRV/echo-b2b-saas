"use client";

import { getCountryFlagUrl, getCountryFromTimezone } from "@/lib/country-utils";
import { api } from "@workspace/backend/_generated/api";
import { ConversationStateIcon } from "@workspace/ui/components/conversations-status-icon";
import { DicebareAvatar } from "@workspace/ui/components/dicebare-avatar";
import { InfiniteScrollTrigger } from "@workspace/ui/components/infinite-scroll-trigger-";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { useInfiniteScroll } from "@workspace/ui/hooks/use-infinite-hook";
import { cn } from "@workspace/ui/lib/utils";
import { usePaginatedQuery } from "convex/react";
import { formatDistanceToNow } from "date-fns";
import { useAtomValue, useSetAtom } from "jotai/react";
import {
  AlertCircle,
  CheckIcon,
  ClockIcon,
  CornerUpLeftIcon,
  ListIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { statusFilterAtom } from "../../atoms";
export const ConversationPanel = () => {
  const pathName = usePathname();
  const statusFilter = useAtomValue(statusFilterAtom);
  const setStatusFilter = useSetAtom(statusFilterAtom);

  const conversation = usePaginatedQuery(
    api.private.conversations.getManyConversation,
    {
      status: statusFilter === "all" ? undefined : statusFilter,
    },
    {
      initialNumItems: 10,
    },
  );

  const {
    topElementRef,
    handleLoadMore,
    canLoadMore,
    isLoadingMore,
    isLoadingFirstPage,
  } = useInfiniteScroll({
    status: conversation.status,
    loadMore: conversation.loadMore,
    loadSize: 10,
  });

  return (
    <div className="flex flex-col h-full w-full bg-background text-sidebar-foreground">
      <div className="flex flex-col gap-3.5 border-b p-2">
        <Select
          value={statusFilter}
          onValueChange={(value) =>
            setStatusFilter(
              value as "resolved" | "unresolved" | "escalated" | "all",
            )
          }
          defaultValue="all"
        >
          <SelectTrigger className="h-8 border-none px-1.5 shadow-none ring-0 hover:bg-accent hover:text-accent-foreground focus-visible:ring-0">
            <SelectValue placeholder="Select a conversation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              <div className="flex items-center gap-2">
                <ListIcon className="size-4" />
                <span>All</span>
              </div>
            </SelectItem>
            <SelectItem value="resolved">
              <div className="flex items-center gap-2">
                <CheckIcon className="size-4" />
                <span>Resolved</span>
              </div>
            </SelectItem>
            <SelectItem value="escalated">
              <div className="flex items-center gap-2">
                <AlertCircle className="size-4" />
                <span>Escalated</span>
              </div>
            </SelectItem>
            <SelectItem value="unresolved">
              <div className="flex items-center gap-2">
                <ClockIcon className="size-4" />
                <span>Unresolved</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      {isLoadingFirstPage ? (
        <SkeletonConversations />
      ) : (
        <ScrollArea className="max-h-[calc(100vh-53px)]">
          <div className="flex w-full flex-1 flex-col text-sm">
            {conversation.results.map((conv) => {
              const isLastMessageFromOprator =
                conv.lastMessage?.message?.role !== "user";

              const country = getCountryFromTimezone(
                conv.contactSession?.metadata?.timezone,
              );

              const countryFlagUrl = country?.code
                ? getCountryFlagUrl(country.code)
                : undefined;

              return (
                <Link
                  href={`/conversations/${conv._id}`}
                  key={conv._id}
                  className={cn(
                    "flex items-start gap-2 p-4 py-5 text-sm leading-tight hover:bg-accent hover:text-accent-foreground cursor-pointer relative border-b",
                    pathName === `/conversations/${conv._id}` &&
                      "bg-accent text-accent-foreground",
                  )}
                >
                  <div
                    className={cn(
                      "-translate-y-1/2 absolute top-1/2 left-0 h-[64%] w-1 rounded-r-full bg-neutral-500 opacity-0 transition-opacity",
                      pathName === `/conversations/${conv._id}` &&
                        "opacity-100",
                    )}
                  />

                  <DicebareAvatar
                    seed={conv.contactSession._id}
                    size={40}
                    className="shrink-0"
                    badgeImageUrl={countryFlagUrl}
                  />
                  <div className="flex-1">
                    <div className="flex w-full items-center gap-2">
                      <span className="truncate font-bold">
                        {conv.contactSession.name}
                      </span>
                      <span className="ml-auto shrink-0 text-muted-foreground text-xs">
                        {formatDistanceToNow(conv._creationTime)}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center justify-between gap-2">
                      <div className="flex w-0 grow items-center gap-1">
                        {isLastMessageFromOprator && (
                          <CornerUpLeftIcon className="size-3 shrink-0 text-muted-foreground" />
                        )}
                        <span
                          className={cn(
                            "line-clamp-1 text-muted-foreground text-xs",
                            !isLastMessageFromOprator && "font-bold text-black",
                          )}
                        >
                          {conv.lastMessage?.text}
                        </span>
                      </div>
                      <ConversationStateIcon status={conv.status} />
                    </div>
                  </div>
                </Link>
              );
            })}
            <InfiniteScrollTrigger
              isLoadingMore={isLoadingMore}
              canLoadMore={canLoadMore}
              onLoadMore={handleLoadMore}
              ref={topElementRef}
            />
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

export const SkeletonConversations = () => {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden">
      <div className="relative flex w-full min-w-0 flex-col p-2">
        <div className="w-full space-y-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="flex items-start gap-3 rounded-lg p-4" key={index}>
              <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
              <div className="min-w-10 flex-1">
                <div className="flex w-full items-center gap-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="ml-auto h-3 w-12 shrink-0" />
                </div>
                <div className="mt-2">
                  <Skeleton className="h-3 w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
