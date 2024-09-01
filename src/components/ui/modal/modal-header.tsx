"use client";

import { cn } from "@/lib/utils";

export const ModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2", className)} {...props} />
);

ModalHeader.displayName = "ModalHeader";
