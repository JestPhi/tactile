import { ButtonHTMLAttributes, ReactNode } from 'react';
type ButtonProps = {
    children?: ReactNode;
    isLoading?: boolean;
    loadingText?: string;
    variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: ({ children, className, disabled, isLoading, loadingText, variant, ...rest }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
//# sourceMappingURL=index.d.ts.map