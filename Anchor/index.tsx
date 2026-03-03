import { ComponentProps, ReactNode } from "react";
import { Link } from "react-router-dom";

type AnchorProps = {
  children?: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "className">;

const Anchor = ({ children, className = "", ...rest }: AnchorProps) => {
  return (
    <Link className={[className].join(" ")} {...rest} data-component="Anchor">
      {children}
    </Link>
  );
};

export default Anchor;
