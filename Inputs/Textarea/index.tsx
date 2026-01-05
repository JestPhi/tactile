import React from "react";
import style from "./style.module.css";
type TextareaProps = {
  isEditMode?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isEditMode, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        className={[
          style.textarea,
          className,
          `${isEditMode ? style.editMode : undefined}`,
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
        data-component="InputTextarea"
      />
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
