import { SkeletonRow } from "./skeleton-row";

export function LoadingSkeleton() {
  return (
    <div className="space-y-1">
      <SkeletonRow isHeader />
      {[...Array(10)].map((_, index) => (
        <SkeletonRow key={index} />
      ))}
    </div>
  );
}
