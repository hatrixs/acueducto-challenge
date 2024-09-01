"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Fallback } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

export const AvatarFallback = forwardRef<
  ElementRef<typeof Fallback>,
  ComponentPropsWithoutRef<typeof Fallback>
>(({ className, ...props }, ref) => (
  <Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full",
      className,
    )}
    {...props}
  />
));

AvatarFallback.displayName = Fallback.displayName;
