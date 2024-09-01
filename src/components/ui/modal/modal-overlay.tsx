"use client";

import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react";
import { Overlay } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

export const ModalOverlay = forwardRef<
  ElementRef<typeof Overlay>,
  ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/15 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));

ModalOverlay.displayName = Overlay.displayName;
