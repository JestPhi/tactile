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
export declare const cn: (...classes: (string | false | null | undefined)[]) => string;
//# sourceMappingURL=classNames.d.ts.map