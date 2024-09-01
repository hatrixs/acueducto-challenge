import * as React from "react";
import { cn } from "@/lib/utils";

export const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex items-center gap-x-1", className)}
    {...props}
  />
));

PaginationContent.displayName = "PaginationContent";
