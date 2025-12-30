import { SelectHTMLAttributes, ReactNode } from 'react';
interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children?: ReactNode;
    className?: string;
    error?: boolean;
    placeholder?: string;
}
declare const Dropdown: ({ children, className, error, placeholder, disabled, ...rest }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;
//# sourceMappingURL=index.d.ts.map