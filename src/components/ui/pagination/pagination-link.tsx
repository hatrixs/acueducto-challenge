import * as React from "react";
import { cn } from "@/lib/utils";

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<"a">;

export const PaginationLink = ({
  className,
  isActive,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "flex h-7 min-w-9 select-none items-center justify-center rounded px-1 py-2 text-sm",
      isActive
        ? "bg-[#232A33] text-neutral-cloud"
        : "cursor-pointer text-[#6B7280] hover:bg-neutral-slate hover:text-white",
      className,
    )}
    {...props}
  />
);

PaginationLink.displayName = "PaginationLink";
