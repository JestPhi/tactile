import { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = {
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({
  children,
  className = "",
  disabled,
  ...rest
}: IconButtonProps) => {
  const styles = [
    "flex",
    "items-center",
    "justify-center",
    "min-h-44",
    "min-w-44",
    "bg-none",
    "border-none",
    "p-0",
    "cursor-pointer",
    disabled ? "opacity-60 cursor-not-allowed" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={styles} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default IconButton;
