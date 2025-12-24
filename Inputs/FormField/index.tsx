import { nanoid } from "nanoid";
import { ReactNode } from "react";

import "../../styles/color.css";
import "../../styles/flex.css";
import "../../styles/font.css";
import "../../styles/margin.css";

interface FormFieldProps {
  id?: string;
  label?: ReactNode;
  error?: ReactNode;
  helperText?: ReactNode;
  required?: boolean;
  className?: string;
  children: ReactNode;
}

const FormField = ({
  id,
  label,
  error,
  helperText,
  required,
  className,
  children,
}: FormFieldProps) => {
  const inputId = id || `input-${nanoid(9)}`;
  const errorId = error ? `${inputId}-error` : undefined;
  const helperId = helperText ? `${inputId}-helper` : undefined;
  const describedBy = [errorId, helperId].filter(Boolean).join(" ");

  return (
    <div
      className={["flex flex-col gap-4", className].filter(Boolean).join(" ")}
      data-component="FormField"
    >
      {label && (
        <label htmlFor={inputId} className="font-semibold text-sm mb-6">
          {label}
          {required && <span className="color-error ml-4">*</span>}
        </label>
      )}
      <div
        className="h-full"
        aria-invalid={!!error}
        {...(describedBy && { "aria-describedby": describedBy })}
      >
        {children}
      </div>
      {error && (
        <span id={errorId} className="text-xs color-error mt-4">
          {error}
        </span>
      )}
      {helperText && !error && (
        <span id={helperId} className="text-xs color-gray-500 mt-4">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default FormField;
