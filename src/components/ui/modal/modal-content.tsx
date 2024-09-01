"use client";

import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react";
import { Close, Content } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModalPortal } from "./modal";
import { ModalOverlay } from "./modal-overlay";

export const ModalContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-5 rounded-3xl border border-[#6B7280] bg-[#232A33] p-10 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
        className,
      )}
      {...props}
    >
      {children}
      <Close className="absolute right-10 top-10 rounded-sm opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none">
        <X className="h-6 w-6 text-white" />
        <span className="sr-only">Close</span>
      </Close>
    </Content>
  </ModalPortal>
));

ModalContent.displayName = Content.displayName;
