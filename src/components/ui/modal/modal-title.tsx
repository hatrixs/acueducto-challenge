import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Title } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

export const ModalTitle = forwardRef<
  ElementRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={cn("text-2xl font-bold text-white", className)}
    {...props}
  />
));

ModalTitle.displayName = Title.displayName;
