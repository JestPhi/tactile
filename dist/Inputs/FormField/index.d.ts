import { ReactNode } from 'react';
interface FormFieldProps {
    id?: string;
    label?: ReactNode;
    error?: ReactNode;
    helperText?: ReactNode;
    required?: boolean;
    className?: string;
    children: ReactNode;
}
declare const FormField: ({ id, label, error, helperText, required, className, children, }: FormFieldProps) => import("react/jsx-runtime").JSX.Element;
export default FormField;
//# sourceMappingURL=index.d.ts.map