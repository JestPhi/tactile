import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/classNames";
import style from "./style.module.css";

type ButtonProps = {
  children?: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className = "",
  disabled,
  isLoading = false,
  loadingText = "Loading...",
  variant = "primary",
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  const touchArea = "flex items-center justify-center min-h-44 min-w-44";
  const buttonStyles =
    "flex items-center justify-center border-none rounded-32 h-32 pl-16 pr-16 pt-8 pb-8";

  const colorStyles = isDisabled
    ? "bg-disabled text-disabled opacity-60 cursor-not-allowed"
    : variant === "secondary"
    ? "bg-white text-black border border-black cursor-pointer"
    : "bg-primary text-white cursor-pointer";

  return (
    <button
      className={cn(touchArea, className)}
      disabled={isDisabled}
      data-component="Button"
      data-variant={variant}
      {...rest}
    >
      <span className={cn(buttonStyles, colorStyles)}>
        {isLoading && <span className={style.spinner} aria-hidden="true" />}
        <span>{isLoading ? loadingText : children}</span>
      </span>
    </button>
  );
};

export default Button;
