import { ReactNode } from "react";
import { cn } from "../utils/classNames";

interface BarProps {
  children: ReactNode;
  className?: string;
  variant?: string;
}

const Bar = ({ children, className }: BarProps) => {
  return (
    <div
      data-component="Bar"
      className={cn("h-48", "w-full", "flex", "shrink-0", className)}
    >
      {children}
    </div>
  );
};

export default Bar;
