import { ComponentProps, ReactNode } from "react";
import { Link } from "react-router-dom";

type AnchorProps = {
  children?: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "className">;

const Anchor = ({ children, className = "", ...rest }: AnchorProps) => {
  const baseClasses =
    "flex items-center justify-center bg-none border-none cursor-pointer h-44 min-w-44 p-0";

  return (
    <Link
      className={[baseClasses, className].join(" ")}
      {...rest}
      data-component="Anchor"
    >
      {children}
    </Link>
  );
};

export default Anchor;
