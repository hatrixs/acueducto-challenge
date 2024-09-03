import { cn } from "@/lib/utils";
import React from "react";

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-[#374151] transition-colors hover:bg-neutral-slate/50",
      className,
    )}
    {...props}
  />
));

TableRow.displayName = "TableRow";
