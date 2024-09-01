import { ChevronLeft } from "lucide-react";
import { PaginationLink } from "./pagination-link";
import { cn } from "@/lib/utils";

export const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn(
      "text-[#6B7280] hover:bg-neutral-slate hover:text-white",
      className,
    )}
    {...props}
  >
    <ChevronLeft className="h-6 w-5" />
  </PaginationLink>
);

PaginationPrevious.displayName = "PaginationPrevious";
