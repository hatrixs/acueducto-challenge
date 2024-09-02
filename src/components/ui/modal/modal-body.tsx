"use client";

import { cn } from "@/lib/utils";

export const ModalBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-white", className)} {...props} />
);

ModalBody.displayName = "ModalBody";
