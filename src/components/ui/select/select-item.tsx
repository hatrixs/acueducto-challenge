import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Item, ItemIndicator, ItemText } from "@radix-ui/react-select";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const SelectItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, children, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm text-[#D1D5DB] outline-none hover:bg-neutral-carbon data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Check className="h-4 w-4" />
      </ItemIndicator>
    </span>
    <ItemText>{children}</ItemText>
  </Item>
));

SelectItem.displayName = Item.displayName;
