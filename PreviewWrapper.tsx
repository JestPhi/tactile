import { ReactNode } from "react";
import "./styles/util.css";

interface PreviewWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * PreviewWrapper - Wrapper component for preview extensions
 * Imports util.css globally so all child components have access to utility classes
 *
 * Usage in preview extensions:
 * <PreviewWrapper>
 *   <YourComponent />
 * </PreviewWrapper>
 */
export const PreviewWrapper = ({
  children,
  className = "",
}: PreviewWrapperProps) => {
  return <div className={`preview-wrapper ${className}`}>{children}</div>;
};

export default PreviewWrapper;
