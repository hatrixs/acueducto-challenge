import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Trigger, Icon } from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const SelectTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <Trigger
      ref={ref}
      className={cn(
        "flex h-[42px] w-full items-center justify-between whitespace-nowrap rounded-lg border border-[#4B5563] bg-neutral-slate px-3 py-4 text-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-primary-lime disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className,
      )}
      {...props}
    >
      {children}
      <Icon asChild>
        <ChevronDown className="h-4 w-4 text-[#D1D5DB]" />
      </Icon>
    </Trigger>
  );
});

SelectTrigger.displayName = Trigger.displayName;
