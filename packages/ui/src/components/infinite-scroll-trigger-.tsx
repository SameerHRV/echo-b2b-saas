import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";

interface InfiniteScrollTriggerProps {
  canLoadMore: boolean;
  isLoadingMore: boolean;
  loadMoreText?: string;
  noMoreText?: string;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
  onLoadMore: () => void;
}

export const InfiniteScrollTrigger = ({
  canLoadMore,
  isLoadingMore,
  loadMoreText = "Load More",
  noMoreText = "No More items",
  className,
  ref,
  onLoadMore,
}: InfiniteScrollTriggerProps) => {
  let text = loadMoreText;
  if (isLoadingMore) {
    text = "Loading...";
  } else if (!canLoadMore) {
    text = noMoreText;
  }

  return (
    <div ref={ref} className={cn("flex w-full justify-center py-2", className)}>
      <Button
        onClick={onLoadMore}
        disabled={!canLoadMore || isLoadingMore}
        size={"sm"}
        variant={"outline"}
      >
        {text}
      </Button>
    </div>
  );
};
