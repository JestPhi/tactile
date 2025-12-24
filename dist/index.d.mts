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

/**
 * Design Tokens - CSS Variables Reference
 * These variables are available after importing @stella/tactile/styles
 *
 * Usage:
 * import { tokens } from "@stella/tactile";
 *
 * <div style={{ color: tokens.colors.primary }} />
 */
declare const tokens: {
    readonly colors: {
        readonly primary: "var(--color-primary)";
        readonly white: "var(--color-white)";
        readonly black: "var(--color-black)";
        readonly gray: "var(--color-gray)";
        readonly disabled: "var(--color-disabled)";
        readonly success: "var(--color-success)";
        readonly warning: "var(--color-warning)";
        readonly info: "var(--color-info)";
        readonly error: "var(--color-error)";
        readonly successBg: "var(--color-success-bg)";
        readonly warningBg: "var(--color-warning-bg)";
        readonly infoBg: "var(--color-info-bg)";
        readonly errorBg: "var(--color-error-bg)";
        readonly successBorder: "var(--color-success-border)";
        readonly warningBorder: "var(--color-warning-border)";
        readonly infoBorder: "var(--color-info-border)";
        readonly errorBorder: "var(--color-error-border)";
    };
    readonly backgrounds: {
        readonly primary: "var(--bg-primary)";
        readonly white: "var(--bg-white)";
        readonly black: "var(--bg-black)";
        readonly gray: "var(--bg-gray)";
        readonly disabled: "var(--bg-disabled)";
        readonly success: "var(--bg-success)";
        readonly warning: "var(--bg-warning)";
        readonly info: "var(--bg-info)";
        readonly error: "var(--bg-error)";
    };
    readonly spacing: {
        readonly 2: "var(--spacing-2)";
        readonly 4: "var(--spacing-4)";
        readonly 6: "var(--spacing-6)";
        readonly 8: "var(--spacing-8)";
        readonly 10: "var(--spacing-10)";
        readonly 12: "var(--spacing-12)";
        readonly 14: "var(--spacing-14)";
        readonly 16: "var(--spacing-16)";
        readonly 20: "var(--spacing-20)";
        readonly 24: "var(--spacing-24)";
        readonly 32: "var(--spacing-32)";
        readonly 44: "var(--spacing-44)";
        readonly 56: "var(--spacing-56)";
        readonly 96: "var(--spacing-96)";
    };
    readonly radius: {
        readonly sm: "var(--radius-sm)";
        readonly md: "var(--radius-md)";
        readonly lg: "var(--radius-lg)";
        readonly full: "var(--radius-full)";
    };
    readonly fontSize: {
        readonly 12: "var(--font-size-12)";
        readonly 14: "var(--font-size-14)";
        readonly 16: "var(--font-size-16)";
        readonly 18: "var(--font-size-18)";
        readonly 24: "var(--font-size-24)";
    };
    readonly fontWeight: {
        readonly normal: "var(--font-weight-normal)";
        readonly semibold: "var(--font-weight-semibold)";
        readonly bold: "var(--font-weight-bold)";
    };
    readonly size: {
        readonly 24: "var(--size-24)";
        readonly 32: "var(--size-32)";
        readonly 36: "var(--size-36)";
        readonly 44: "var(--size-44)";
        readonly 56: "var(--size-56)";
        readonly 96: "var(--size-96)";
    };
    readonly transition: {
        readonly fast: "var(--transition-fast)";
        readonly base: "var(--transition-base)";
        readonly slow: "var(--transition-slow)";
    };
    readonly shadow: {
        readonly sm: "var(--shadow-sm)";
        readonly md: "var(--shadow-md)";
        readonly lg: "var(--shadow-lg)";
    };
    readonly zIndex: {
        readonly base: "var(--z-base)";
        readonly 10: "var(--z-10)";
        readonly 20: "var(--z-20)";
        readonly 30: "var(--z-30)";
        readonly 40: "var(--z-40)";
        readonly header: "var(--z-header)";
        readonly dropdown: "var(--z-dropdown)";
        readonly modal: "var(--z-modal)";
    };
};
/**
 * Raw CSS variable names for advanced usage
 * Use these when you need the variable name itself (e.g., for CSS-in-JS libraries)
 */
declare const cssVars: {
    readonly colorPrimary: "--color-primary";
    readonly colorWhite: "--color-white";
    readonly colorBlack: "--color-black";
    readonly colorGray: "--color-gray";
    readonly colorDisabled: "--color-disabled";
    readonly colorSuccess: "--color-success";
    readonly colorWarning: "--color-warning";
    readonly colorInfo: "--color-info";
    readonly colorError: "--color-error";
    readonly bgPrimary: "--bg-primary";
    readonly bgWhite: "--bg-white";
    readonly bgBlack: "--bg-black";
    readonly bgGray: "--bg-gray";
    readonly bgDisabled: "--bg-disabled";
    readonly bgSuccess: "--bg-success";
    readonly bgWarning: "--bg-warning";
    readonly bgInfo: "--bg-info";
    readonly bgError: "--bg-error";
    readonly spacing2: "--spacing-2";
    readonly spacing4: "--spacing-4";
    readonly spacing6: "--spacing-6";
    readonly spacing8: "--spacing-8";
    readonly spacing10: "--spacing-10";
    readonly spacing12: "--spacing-12";
    readonly spacing14: "--spacing-14";
    readonly spacing16: "--spacing-16";
    readonly spacing20: "--spacing-20";
    readonly spacing24: "--spacing-24";
    readonly spacing32: "--spacing-32";
    readonly spacing44: "--spacing-44";
    readonly spacing56: "--spacing-56";
    readonly spacing96: "--spacing-96";
    readonly radiusSm: "--radius-sm";
    readonly radiusMd: "--radius-md";
    readonly radiusLg: "--radius-lg";
    readonly radiusFull: "--radius-full";
    readonly fontSize12: "--font-size-12";
    readonly fontSize14: "--font-size-14";
    readonly fontSize16: "--font-size-16";
    readonly fontSize18: "--font-size-18";
    readonly fontSize24: "--font-size-24";
    readonly fontWeightNormal: "--font-weight-normal";
    readonly fontWeightSemibold: "--font-weight-semibold";
    readonly fontWeightBold: "--font-weight-bold";
    readonly size24: "--size-24";
    readonly size32: "--size-32";
    readonly size36: "--size-36";
    readonly size44: "--size-44";
    readonly size56: "--size-56";
    readonly size96: "--size-96";
    readonly transitionFast: "--transition-fast";
    readonly transitionBase: "--transition-base";
    readonly transitionSlow: "--transition-slow";
    readonly shadowSm: "--shadow-sm";
    readonly shadowMd: "--shadow-md";
    readonly shadowLg: "--shadow-lg";
    readonly zBase: "--z-base";
    readonly z10: "--z-10";
    readonly z20: "--z-20";
    readonly z30: "--z-30";
    readonly z40: "--z-40";
    readonly zHeader: "--z-header";
    readonly zDropdown: "--z-dropdown";
    readonly zModal: "--z-modal";
};

export { Anchor, Avatar, Bar, Button, FormField, IconButton, _default as InputImage, InputText, ScrollView, Textarea, cn, cssVars, tokens };
