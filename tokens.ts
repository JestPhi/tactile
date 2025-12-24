/**
 * Design Tokens - CSS Variables Reference
 * These variables are available after importing @stella/tactile/styles
 *
 * Usage:
 * import { tokens } from "@stella/tactile";
 *
 * <div style={{ color: tokens.colors.primary }} />
 */

export const tokens = {
  colors: {
    primary: "var(--color-primary)",
    white: "var(--color-white)",
    black: "var(--color-black)",
    gray: "var(--color-gray)",
    disabled: "var(--color-disabled)",
    success: "var(--color-success)",
    warning: "var(--color-warning)",
    info: "var(--color-info)",
    error: "var(--color-error)",
    successBg: "var(--color-success-bg)",
    warningBg: "var(--color-warning-bg)",
    infoBg: "var(--color-info-bg)",
    errorBg: "var(--color-error-bg)",
    successBorder: "var(--color-success-border)",
    warningBorder: "var(--color-warning-border)",
    infoBorder: "var(--color-info-border)",
    errorBorder: "var(--color-error-border)",
  },

  backgrounds: {
    primary: "var(--bg-primary)",
    white: "var(--bg-white)",
    black: "var(--bg-black)",
    gray: "var(--bg-gray)",
    disabled: "var(--bg-disabled)",
    success: "var(--bg-success)",
    warning: "var(--bg-warning)",
    info: "var(--bg-info)",
    error: "var(--bg-error)",
  },

  spacing: {
    2: "var(--spacing-2)",
    4: "var(--spacing-4)",
    6: "var(--spacing-6)",
    8: "var(--spacing-8)",
    10: "var(--spacing-10)",
    12: "var(--spacing-12)",
    14: "var(--spacing-14)",
    16: "var(--spacing-16)",
    20: "var(--spacing-20)",
    24: "var(--spacing-24)",
    32: "var(--spacing-32)",
    48: "var(--spacing-48)",
    56: "var(--spacing-56)",
    96: "var(--spacing-96)",
  },

  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    full: "var(--radius-full)",
  },

  fontSize: {
    12: "var(--font-size-12)",
    14: "var(--font-size-14)",
    16: "var(--font-size-16)",
    18: "var(--font-size-18)",
    24: "var(--font-size-24)",
  },

  fontWeight: {
    normal: "var(--font-weight-normal)",
    semibold: "var(--font-weight-semibold)",
    bold: "var(--font-weight-bold)",
  },

  size: {
    24: "var(--size-24)",
    32: "var(--size-32)",
    36: "var(--size-36)",
    48: "var(--size-48)",
    56: "var(--size-56)",
    96: "var(--size-96)",
  },

  transition: {
    fast: "var(--transition-fast)",
    base: "var(--transition-base)",
    slow: "var(--transition-slow)",
  },

  shadow: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
  },

  zIndex: {
    base: "var(--z-base)",
    10: "var(--z-10)",
    20: "var(--z-20)",
    30: "var(--z-30)",
    40: "var(--z-40)",
    header: "var(--z-header)",
    dropdown: "var(--z-dropdown)",
    modal: "var(--z-modal)",
  },
} as const;

/**
 * Raw CSS variable names for advanced usage
 * Use these when you need the variable name itself (e.g., for CSS-in-JS libraries)
 */
export const cssVars = {
  // Colors
  colorPrimary: "--color-primary",
  colorWhite: "--color-white",
  colorBlack: "--color-black",
  colorGray: "--color-gray",
  colorDisabled: "--color-disabled",
  colorSuccess: "--color-success",
  colorWarning: "--color-warning",
  colorInfo: "--color-info",
  colorError: "--color-error",

  // Backgrounds
  bgPrimary: "--bg-primary",
  bgWhite: "--bg-white",
  bgBlack: "--bg-black",
  bgGray: "--bg-gray",
  bgDisabled: "--bg-disabled",
  bgSuccess: "--bg-success",
  bgWarning: "--bg-warning",
  bgInfo: "--bg-info",
  bgError: "--bg-error",

  // Spacing
  spacing2: "--spacing-2",
  spacing4: "--spacing-4",
  spacing6: "--spacing-6",
  spacing8: "--spacing-8",
  spacing10: "--spacing-10",
  spacing12: "--spacing-12",
  spacing14: "--spacing-14",
  spacing16: "--spacing-16",
  spacing20: "--spacing-20",
  spacing24: "--spacing-24",
  spacing32: "--spacing-32",
  spacing48: "--spacing-48",
  spacing56: "--spacing-56",
  spacing96: "--spacing-96",

  // Radius
  radiusSm: "--radius-sm",
  radiusMd: "--radius-md",
  radiusLg: "--radius-lg",
  radiusFull: "--radius-full",

  // Font sizes
  fontSize12: "--font-size-12",
  fontSize14: "--font-size-14",
  fontSize16: "--font-size-16",
  fontSize18: "--font-size-18",
  fontSize24: "--font-size-24",

  // Font weights
  fontWeightNormal: "--font-weight-normal",
  fontWeightSemibold: "--font-weight-semibold",
  fontWeightBold: "--font-weight-bold",

  // Sizes
  size24: "--size-24",
  size32: "--size-32",
  size36: "--size-36",
  size48: "--size-48",
  size56: "--size-56",
  size96: "--size-96",

  // Transitions
  transitionFast: "--transition-fast",
  transitionBase: "--transition-base",
  transitionSlow: "--transition-slow",

  // Shadows
  shadowSm: "--shadow-sm",
  shadowMd: "--shadow-md",
  shadowLg: "--shadow-lg",

  // Z-index
  zBase: "--z-base",
  z10: "--z-10",
  z20: "--z-20",
  z30: "--z-30",
  z40: "--z-40",
  zHeader: "--z-header",
  zDropdown: "--z-dropdown",
  zModal: "--z-modal",
} as const;
