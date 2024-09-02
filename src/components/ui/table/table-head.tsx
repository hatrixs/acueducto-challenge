import React from "react";
import { cn } from "@/lib/utils";

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 bg-[#2F3646] px-[10px] py-[15px] text-left align-middle font-normal text-neutral-cloud [&:has([role=checkbox])]:pr-0",
      "[&:first-child]:pl-[20px] [&:last-child]:pr-[20px]",
      className,
    )}
    {...props}
  />
));

TableHead.displayName = "TableHead";
