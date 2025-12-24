import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode, ComponentProps, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface BarProps {
    children: ReactNode;
    className?: string;
    variant?: string;
}
declare const Bar: ({ children, className }: BarProps) => react_jsx_runtime.JSX.Element;

interface ScrollViewProps {
    children: ReactNode;
}
declare const ScrollView: ({ children }: ScrollViewProps) => react_jsx_runtime.JSX.Element;

type AnchorProps = {
    children?: ReactNode;
    className?: string;
} & Omit<ComponentProps<typeof Link>, "className">;
declare const Anchor: ({ children, className, ...rest }: AnchorProps) => react_jsx_runtime.JSX.Element;

type ButtonProps = {
    children?: ReactNode;
    isLoading?: boolean;
    loadingText?: string;
    variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: ({ children, className, disabled, isLoading, loadingText, variant, ...rest }: ButtonProps) => react_jsx_runtime.JSX.Element;

type IconButtonProps = {
    children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
declare const IconButton: ({ children, className, disabled, ...rest }: IconButtonProps) => react_jsx_runtime.JSX.Element;

declare const SIZE_MAP: {
    readonly SM: "h-36 w-36";
    readonly LG: "h-96 w-96";
};
type SizeType = keyof typeof SIZE_MAP;
declare const Avatar: ({ basePath, className, parameters, username, src, size, }: {
    basePath: string;
    className?: string;
    parameters?: string;
    username?: string;
    src?: string;
    size?: SizeType;
}) => react_jsx_runtime.JSX.Element;

interface FormFieldProps {
    id?: string;
    label?: ReactNode;
    error?: ReactNode;
    helperText?: ReactNode;
    required?: boolean;
    className?: string;
    children: ReactNode;
}
declare const FormField: ({ id, label, error, helperText, required, className, children, }: FormFieldProps) => react_jsx_runtime.JSX.Element;

interface InputImageProps {
    className?: string;
    onChange?: (file: File | string | null) => void;
    removePlaceholder?: string | null;
    selectPlaceholder?: string | null;
    value?: File | string | null;
}
declare const _default: React.MemoExoticComponent<({ className, onChange, value, removePlaceholder, selectPlaceholder, }: InputImageProps) => react_jsx_runtime.JSX.Element>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    required?: boolean;
    className?: string;
}
declare const InputText: ({ id, required, className, ...rest }: InputProps) => react_jsx_runtime.JSX.Element;

declare const Textarea: React.ForwardRefExoticComponent<{
    isEditMode?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> & React.RefAttributes<HTMLTextAreaElement>>;

/**
 * Utility function for conditionally joining classNames
 * Filters out falsy values and joins the rest with spaces
 *
 * @example
 * cn('base-class', isActive && 'active', 'another-class')
 * // => 'base-class active another-class'
 *
 * @example
 * cn('button', variant === 'primary' ? 'bg-primary' : 'bg-secondary', disabled && 'opacity-60')
 * // => 'button bg-primary' (when disabled is false)
 */
declare const cn: (...classes: (string | false | null | undefined)[]) => string;

export { Anchor, Avatar, Bar, Button, FormField, IconButton, _default as InputImage, InputText, ScrollView, Textarea, cn };
