import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PaginationLink } from "./pagination-link";

export const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn(
      "text-[#6B7280] hover:bg-neutral-slate hover:text-white",
      className,
    )}
    {...props}
  >
    <ChevronRight className="h-6 w-5" />
  </PaginationLink>
);

PaginationNext.displayName = "PaginationNext";
