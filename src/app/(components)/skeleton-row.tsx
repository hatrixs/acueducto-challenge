import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonRowProps {
  isHeader?: boolean;
}

export function SkeletonRow({ isHeader = false }: SkeletonRowProps) {
  return (
    <div className={`flex items-center ${isHeader ? 'p-4' : 'border-t border-gray-700 p-4'}`}>
      <Skeleton className="h-4 w-1/6" />
      <Skeleton className="ml-4 h-4 w-1/6" />
      <Skeleton className="ml-4 h-4 w-1/6" />
      <Skeleton className="ml-4 h-4 w-1/6" />
      <Skeleton className="ml-4 h-4 w-1/6" />
      {isHeader ? (
        <Skeleton className="ml-4 h-4 w-1/6" />
      ) : (
        <div className="ml-4 flex w-1/6 items-center justify-center space-x-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>
      )}
    </div>
  );
}
