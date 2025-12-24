# Tactile Design System

A lightweight, touch-optimized React design system with utility-first styling. Built for modern web applications with accessibility and mobile experience as top priorities.

## Features

- 🎯 **Touch-Optimized**: 44px minimum touch targets throughout
- ♿ **Accessible**: WCAG-compliant components with ARIA support
- 🎨 **Utility-First**: Comprehensive utility class system
- 🌓 **Dark Mode**: Automatic dark mode support via `prefers-color-scheme`
- 📱 **Mobile-First**: Responsive and optimized for mobile devices
- 🔧 **TypeScript**: Fully typed components and APIs
- 🪶 **Lightweight**: Minimal dependencies, maximum performance

## Installation

```bash
npm install @stella/tactile
# or
yarn add @stella/tactile
# or
pnpm add @stella/tactile
```

## Usage

### Import Styles

Import the utility styles in your app's entry point:

```tsx
import "@stella/tactile/styles";
```

### Use Components

```tsx
import { Button, FormField, InputText, Avatar, cn } from "@stella/tactile";

function MyComponent() {
  return (
    <div>
      <FormField label="Username" id="username">
        <InputText id="username" placeholder="Enter username..." />
      </FormField>

      <Button variant="primary">Submit</Button>

      <Avatar
        basePath="/images"
        src="avatar.jpg"
        username="John Doe"
        size="LG"
      />
    </div>
  );
}
```

### Use Utility Classes

```tsx
import { cn } from "@stella/tactile";

function CustomComponent() {
  return (
    <div
      className={cn(
        "flex items-center gap-16",
        "p-24 bg-white rounded-32",
        "border border-gray"
      )}
    >
      Content here
    </div>
  );
}
```

## Available Components

### Layout

- **Bar** - 44px fixed-height horizontal container
- **ScrollView** - Scrollable content container

### Interactive

- **Button** - Touch-optimized button with variants
- **IconButton** - Icon-only button
- **Anchor** - Router-integrated link component

### Display

- **Avatar** - User avatar with fallback

### Forms

- **FormField** - Accessible form field wrapper
- **InputText** - Text input component
- **Textarea** - Multi-line text input
- **InputImage** - Image upload input

### Utilities

- **cn()** - ClassName merging utility

## Design Tokens

### Colors

```css
/* Semantic Colors */
--color-primary
--color-success
--color-warning
--color-info
--color-error

/* Backgrounds */
--bg-primary
--bg-success
--bg-warning
--bg-info
--bg-error
--bg-white
--bg-black
--bg-gray
```

### Spacing

```css
/* Spacing scale: 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 44, 56, 96 */
p-16  /* padding: 16px */
m-24  /* margin: 24px */
gap-8 /* gap: 8px */
```

### Sizing

```css
h-44  /* height: 44px (touch target) */
w-96  /* width: 96px */
min-h-44 /* min-height: 44px */
```

## Utility Classes

### Layout

```css
.flex,
.flex-col,
.flex-row .items-center,
.items-start,
.items-end .justify-center,
.justify-between .w-full,
.h-full;
```

### Spacing

```css
.p-{size}   /* padding */
.m-{size}   /* margin */
.gap-{size} /* gap */
```

### Colors

```css
.bg-primary,
.bg-success,
.bg-warning,
.bg-info,
.bg-error .text-primary,
.text-success,
.text-warning,
.text-info,
.text-error .border-primary,
.border-success,
.border-warning,
.border-info,
.border-error;
```

### Typography

```css
.text-xs,
.text-sm,
.text-base,
.text-lg,
.text-xl .font-normal,
.font-semibold,
.font-bold;
```

## Dark Mode

Dark mode is automatically applied based on system preferences via `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
  /* Colors automatically adapt */
}
```

## Building New Components

See [COMPONENT_TEMPLATE.md](./COMPONENT_TEMPLATE.md) for guidelines on creating consistent, accessible components.

### Quick Example

```tsx
import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@stella/tactile";

interface MyComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const MyComponent = ({
  children,
  variant = "primary",
  className,
  ...rest
}: MyComponentProps) => {
  return (
    <button
      data-component="MyComponent"
      className={cn(
        "min-h-44 min-w-44", // Touch target
        "flex items-center justify-center",
        variant === "primary" && "bg-primary text-white",
        variant === "secondary" && "bg-white text-black border",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
```

## Development

### Prerequisites

- Node.js 18+
- React 18+

### Local Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch mode
npm run dev

# Type checking
npm run type-check
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers with modern CSS support

## Contributing

See [COMPONENT_TEMPLATE.md](./COMPONENT_TEMPLATE.md) for component development guidelines.

## License

MIT
