import React from "react";
import { cn } from "@/lib/utils";

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-4 align-middle text-neutral-cloud [&:has([role=checkbox])]:pr-0",
      "[&:first-child]:pl-[20px] [&:last-child]:pr-[20px]",
      className,
    )}
    {...props}
  />
));

TableCell.displayName = "TableCell";
