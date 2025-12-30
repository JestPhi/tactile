import { default as React } from 'react';
interface InputImageProps {
    className?: string;
    onChange?: (file: File | string | null) => void;
    removePlaceholder?: string | null;
    selectPlaceholder?: string | null;
    value?: File | string | null;
    variant?: "default" | "square" | "avatar" | "small" | "large";
}
declare const _default: React.MemoExoticComponent<({ className, onChange, value, removePlaceholder, selectPlaceholder, variant, }: InputImageProps) => import("react/jsx-runtime").JSX.Element>;
export default _default;
//# sourceMappingURL=index.d.ts.map