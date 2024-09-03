import React from "react";
import { cn } from "@/lib/utils";

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "px-[20px] py-[15px] align-middle text-neutral-cloud",
      className,
    )}
    {...props}
  />
));

TableCell.displayName = "TableCell";
