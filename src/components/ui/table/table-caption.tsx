import React from "react";
import { cn } from "@/lib/utils";

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-neutral-cloud", className)}
    {...props}
  />
));

TableCaption.displayName = "TableCaption";
