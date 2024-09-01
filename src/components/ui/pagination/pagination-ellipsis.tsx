import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";

export const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn(
      "flex h-7 min-w-6 items-center justify-center rounded px-1 py-2",
      className,
    )}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4 text-[#6B7280]" />
    <span className="sr-only">More pages</span>
  </span>
);

PaginationEllipsis.displayName = "PaginationEllipsis";
