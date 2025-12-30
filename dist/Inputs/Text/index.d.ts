import { InputHTMLAttributes } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    required?: boolean;
    className?: string;
}
declare const InputText: ({ id, required, className, ...rest }: InputProps) => import("react/jsx-runtime").JSX.Element;
export default InputText;
//# sourceMappingURL=index.d.ts.map