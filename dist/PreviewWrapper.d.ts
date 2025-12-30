import { ReactNode } from 'react';
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
export declare const PreviewWrapper: ({ children, className, }: PreviewWrapperProps) => import("react/jsx-runtime").JSX.Element;
export default PreviewWrapper;
//# sourceMappingURL=PreviewWrapper.d.ts.map