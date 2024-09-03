import React from "react";
import { cn } from "@/lib/utils";

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot ref={ref} className={cn("py-[105px]", className)} {...props} />
));

TableFooter.displayName = "TableFooter";
