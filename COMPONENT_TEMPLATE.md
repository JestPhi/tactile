# Tactile Component Template & Guidelines

This guide provides standardized patterns for building consistent, accessible, and maintainable components in the Tactile design system.

## Component Structure

```tsx
import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/tactile/utils/classNames";
import styles from "./style.module.css"; // Optional: only if component-specific styles needed

interface ComponentNameProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
}

const ComponentName = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className,
  ...rest
}: ComponentNameProps) => {
  return (
    <div
      data-component="ComponentName"
      className={cn(
        "base-classes",
        variant === "primary" && "variant-classes",
        size === "lg" && "size-classes",
        disabled && "disabled-classes",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ComponentName;
```

## Core Principles

### 1. TypeScript First

- Always use TypeScript interfaces for props
- Extend native HTML element types when possible
- Provide explicit type exports for complex types

```tsx
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}
```

### 2. Standardized className Handling

- Always use the `cn()` utility from `@/tactile/utils/classNames`
- Order: base classes → variant classes → state classes → user className
- Use logical operators for conditional classes

```tsx
className={cn(
  "base-class",
  variant === "primary" && "primary-class",
  isActive && "active-class",
  className // User className always last
)}
```

### 3. Consistent Prop Patterns

**Required Props:**

- `className?`: Always optional, allow user overrides
- `children?`: For container components
- `...rest`: Spread remaining HTML attributes

**Recommended Props:**

- `variant?`: Visual variations (primary, secondary, etc.)
- `size?`: Size variations (sm, md, lg)
- `disabled?`: Disabled state
- `isLoading?`: Loading state

**Avoid:**

- `style` prop (use className instead)
- Too many variant props (consolidate into `variant`)

### 4. Data Attributes

- Always add `data-component="ComponentName"` for debugging
- Add `data-variant`, `data-size` for testing/styling hooks

```tsx
<div
  data-component="Button"
  data-variant={variant}
  data-size={size}
>
```

### 5. Accessibility

**Always include:**

- Semantic HTML elements
- ARIA attributes when needed
- Keyboard navigation support
- Focus indicators
- Screen reader text

```tsx
// Good
<button aria-label="Close modal" disabled={disabled}>
  <CloseIcon aria-hidden="true" />
</button>

// Bad
<div onClick={handleClick}>Close</div>
```

### 6. Touch Targets

- Minimum 44px touch target for interactive elements
- Use utility classes: `min-h-44 min-w-44`

```tsx
className={cn(
  "flex items-center justify-center",
  "min-h-44 min-w-44", // Touch target
  className
)}
```

### 7. Default Props

- Use parameter defaults, not `defaultProps`
- Make sensible defaults (most common use case)

```tsx
const Button = ({
  variant = "primary", // Most common
  size = "md",         // Medium is default
  disabled = false,
  ...rest
}: ButtonProps) => {
```

## Styling Guidelines

### Utility-First Approach

- Use utility classes from tactile/styles/
- Avoid inline styles
- Use CSS modules only for component-specific animations/effects

```tsx
// Good
className={cn("flex items-center gap-8 p-16")}

// Avoid
style={{ display: "flex", gap: "8px" }}
```

### Design Tokens

Use CSS variables from [variables.css](tactile/styles/variables.css):

```tsx
// Spacing
"p-16" "m-8" "gap-12"

// Colors
"bg-primary" "text-white" "border-gray"

// Sizes
"h-44" "w-96" "rounded-32"
```

### Responsive Design

- Mobile-first by default
- Use 44px minimum touch targets
- Consider 100dvh for full-height layouts

## Component Patterns

### Container Components

```tsx
interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div data-component="Container" className={cn("base-classes", className)}>
      {children}
    </div>
  );
};
```

### Interactive Components

```tsx
interface InteractiveProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

const Interactive = ({
  children,
  disabled,
  isLoading,
  className,
  ...rest
}: InteractiveProps) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      disabled={isDisabled}
      aria-busy={isLoading}
      data-component="Interactive"
      className={cn(
        "min-h-44 min-w-44",
        "cursor-pointer",
        isDisabled && "opacity-60 cursor-not-allowed",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
```

### Form Components

```tsx
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  className?: string;
}

const Input = ({ error, className, ...rest }: InputProps) => {
  return (
    <input
      aria-invalid={error}
      data-component="Input"
      className={cn("h-44 px-16 border-b", error && "border-error", className)}
      {...rest}
    />
  );
};
```

## File Structure

```
ComponentName/
  ├── index.tsx              # Component implementation
  ├── index.variants.tsx     # Visual variants for showcase
  ├── style.module.css       # Component-specific styles (if needed)
  └── README.md             # Documentation
```

## Documentation (README.md)

Every component should have a README with:

1. **Brief description**
2. **When to use / When not to use**
3. **Props table**
4. **Usage examples**
5. **Accessibility notes**
6. **Best practices**

See [Bar/README.md](Bar/README.md) or [FormField/README.md](Inputs/FormField/README.md) for examples.

## Checklist for New Components

- [ ] TypeScript interface with proper types
- [ ] Extends native HTML element props
- [ ] Uses `cn()` utility for className handling
- [ ] Includes `data-component` attribute
- [ ] Has sensible default props
- [ ] Supports user className override
- [ ] Meets 44px touch target minimum
- [ ] Includes accessibility attributes
- [ ] Uses design tokens (no magic numbers)
- [ ] Has README.md documentation
- [ ] Has variants file for showcase
- [ ] Responsive and mobile-friendly

## Examples

### Good Component

```tsx
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/tactile/utils/classNames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  className,
  ...rest
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      disabled={isDisabled}
      aria-busy={isLoading}
      data-component="Button"
      data-variant={variant}
      className={cn(
        "flex items-center justify-center",
        "min-h-44 min-w-44 px-16 py-8",
        "border-none rounded-32",
        variant === "primary" && "bg-primary text-white",
        variant === "secondary" && "bg-white text-black border",
        size === "sm" && "h-32 px-12 py-4",
        size === "lg" && "h-48 px-24 py-12",
        isDisabled && "opacity-60 cursor-not-allowed",
        !isDisabled && "cursor-pointer",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
```

### Bad Component

```tsx
// ❌ No TypeScript
// ❌ No className utility
// ❌ Inline styles
// ❌ No accessibility
// ❌ No data attributes
const BadButton = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        padding: "8px 16px",
        background: props.primary ? "blue" : "gray",
      }}
    >
      {props.children}
    </div>
  );
};
```

## Additional Resources

- [Utility Classes](styles/README.md) - Available utility classes
- [Design Tokens](styles/variables.css) - CSS variables
- [Accessibility Guide](#) - WCAG compliance patterns
- [Component Showcase](#) - View all components in VS Code extension
