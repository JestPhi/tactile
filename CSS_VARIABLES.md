# CSS Variables Reference

All variables are automatically available after importing `@stella/tactile/styles`.

## Colors

```css
/* Brand & Base Colors */
--color-primary: rgb(1, 127, 230)
--color-white: #ffffff (dark mode: #000000)
--color-black: #000000 (dark mode: #ffffff)
--color-gray: #666666 (dark mode: #999999)
--color-disabled: #666666 (dark mode: #999999)

/* Semantic Colors */
--color-success: #34c759
--color-warning: #ff9500
--color-info: #5ac8fa
--color-error: #ff3b30

/* State Backgrounds */
--color-success-bg: #e8f9f0
--color-warning-bg: #fff4e5
--color-info-bg: #e5f6fd
--color-error-bg: #ffebee

/* State Borders */
--color-success-border: #a7ead0
--color-warning-border: #ffd599
--color-info-border: #b3e5fc
--color-error-border: #ffcdd2
```

## Backgrounds

```css
--bg-primary: rgb(1, 127, 230)
--bg-white: #ffffff (dark mode: #000000)
--bg-black: #000000 (dark mode: #ffffff)
--bg-gray: #f5f5f5 (dark mode: #1c1c1e)
--bg-disabled: #e0e0e0 (dark mode: #2c2c2e)
--bg-success: #e8f9f0
--bg-warning: #fff4e5
--bg-info: #e5f6fd
--bg-error: #ffebee
```

## Spacing

```css
--spacing-2: 2px
--spacing-4: 4px
--spacing-6: 6px
--spacing-8: 8px
--spacing-10: 10px
--spacing-12: 12px
--spacing-14: 14px
--spacing-16: 16px
--spacing-20: 20px
--spacing-24: 24px
--spacing-32: 32px
--spacing-48: 48px   /* Touch target size */
--spacing-56: 56px
--spacing-96: 96px
```

## Border Radius

```css
--radius-sm: 4px
--radius-md: 16px
--radius-lg: 32px
--radius-full: 50%
```

## Typography

```css
/* Font Sizes */
--font-size-12: 12px
--font-size-14: 14px
--font-size-16: 16px
--font-size-18: 18px
--font-size-24: 24px

/* Font Weights */
--font-weight-normal: 400
--font-weight-semibold: 600
--font-weight-bold: 700
```

## Sizes

```css
--size-24: 24px
--size-32: 32px
--size-36: 36px
--size-48: 48px   /* Touch target minimum */
--size-56: 56px
--size-96: 96px
```

## Transitions

```css
--transition-fast: 150ms ease
--transition-base: 250ms ease
--transition-slow: 350ms ease
```

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
```

## Z-Index

```css
--z-base: 1
--z-10: 10
--z-20: 20
--z-30: 30
--z-40: 40
--z-header: 50
--z-dropdown: 100
--z-modal: 1000
```

## Usage in CSS Modules

```css
/* styles.module.css */
.button {
  background-color: var(--bg-primary);
  color: var(--color-white);
  padding: var(--spacing-16) var(--spacing-24);
  border-radius: var(--radius-md);
  transition: var(--transition-base);
}

.card {
  background: var(--bg-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-24);
  box-shadow: var(--shadow-md);
}

.touchTarget {
  min-height: var(--size-48);
  min-width: var(--size-48);
}
```

## Dark Mode

All color and background variables automatically adapt to dark mode via `prefers-color-scheme: dark`.
