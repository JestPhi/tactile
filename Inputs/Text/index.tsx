import { nanoid } from "nanoid";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  className?: string;
}

const InputText = ({ id, required, className, ...rest }: InputProps) => {
  const inputId = id || `input-${nanoid(9)}`;

  const baseClass =
    "border-b box-sizing-border-box text-base h-44 outline-none mb-8 w-full pl-6";

  return (
    <input
      id={inputId}
      type="text"
      className={[baseClass, className].filter(Boolean).join(" ")}
      {...rest}
    />
  );
};

export default InputText;
