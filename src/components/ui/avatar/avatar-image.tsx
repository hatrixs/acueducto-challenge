"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Image } from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

export const AvatarImage = forwardRef<
  ElementRef<typeof Image>,
  ComponentPropsWithoutRef<typeof Image>
>(({ className, ...props }, ref) => (
  <Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));

AvatarImage.displayName = Image.displayName;
