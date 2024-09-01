"use client";

import { cn } from "@/lib/utils";

export const ModalBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("rounded-lg bg-neutral-slate p-5 text-white", className)}
    {...props}
  />
);

ModalBody.displayName = "ModalBody";
