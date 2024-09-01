import { cn } from "@/lib/utils";
import {
  ComponentPropsWithoutRef,
  forwardRef,
  InputHTMLAttributes,
} from "react";
import { Label } from "./label";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelProps?: ComponentPropsWithoutRef<typeof Label>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, label, labelProps, ...props }, ref) => {
    const inputElement = (
      <input
        type={type}
        className={cn(
          "placeholder:text-muted-foreground peer flex h-[42px] w-full rounded-lg border border-[#4B5563] bg-neutral-slate px-4 py-3 text-white focus:ring-primary-lime focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );

    if (!label) {
      return inputElement;
    }

    return (
      <div className="flex flex-col gap-y-[10px]">
        <Label
          className={cn(
            disabled && "cursor-not-allowed opacity-50",
            labelProps?.className,
          )}
          {...labelProps}
        >
          {label}
        </Label>
        {inputElement}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
