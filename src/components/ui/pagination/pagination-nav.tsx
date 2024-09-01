import { cn } from "@/lib/utils";

export const PaginationNav = ({
  className,
  ...props
}: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

PaginationNav.displayName = "PaginationNav";
