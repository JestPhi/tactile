import { SelectHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/classNames";

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: ReactNode;
  className?: string;
  error?: boolean;
  placeholder?: string;
}

const Dropdown = ({
  children,
  className,
  error,
  placeholder,
  disabled,
  ...rest
}: DropdownProps) => {
  return (
    <select
      data-component="Dropdown"
      className={cn(
        "min-h-48 w-full",
        "px-16 py-8",
        "border-b",
        "bg-white",
        "text-base",
        "cursor-pointer",
        "outline-none",
        error && "border-error",
        disabled && "opacity-60 cursor-not-allowed bg-disabled",
        className
      )}
      disabled={disabled}
      aria-invalid={error}
      {...rest}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
};

export default Dropdown;
