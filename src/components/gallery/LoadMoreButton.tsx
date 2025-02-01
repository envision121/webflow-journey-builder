import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
  isFetching: boolean;
}

const LoadMoreButton = ({ onClick, isLoading, isFetching }: LoadMoreButtonProps) => {
  return (
    <div className="flex justify-center mt-12">
      <Button
        onClick={onClick}
        disabled={isLoading || isFetching}
        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full transition-all duration-300 disabled:opacity-70"
      >
        {(isLoading || isFetching) ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading...</span>
          </div>
        ) : (
          "Load More"
        )}
      </Button>
    </div>
  );
};

export default LoadMoreButton;