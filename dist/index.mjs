// utils/classNames.ts
var cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Bar/index.tsx
import { jsx } from "react/jsx-runtime";
var Bar = ({ children, className }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-component": "Bar",
      className: cn("h-44", "w-full", "flex", "shrink-0", className),
      children
    }
  );
};
var Bar_default = Bar;

// ScrollView/index.tsx
import styles from "./style.module-5SVMZBNT.module.css";
import { jsx as jsx2 } from "react/jsx-runtime";
var ScrollView = ({ children }) => {
  return /* @__PURE__ */ jsx2("div", { className: styles.scrollView, children });
};
var ScrollView_default = ScrollView;

// Anchor/index.tsx
import { Link } from "react-router-dom";
import { jsx as jsx3 } from "react/jsx-runtime";
var Anchor = ({ children, className = "", ...rest }) => {
  const baseClasses = "flex items-center justify-center bg-none border-none cursor-pointer h-44 min-w-44 p-0";
  return /* @__PURE__ */ jsx3(Link, { className: [baseClasses, className].join(" "), ...rest, children });
};
var Anchor_default = Anchor;

// Button/index.tsx
import style from "./style.module-LUVP6EBT.module.css";
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var Button = ({
  children,
  className = "",
  disabled,
  isLoading = false,
  loadingText = "Loading...",
  variant = "primary",
  ...rest
}) => {
  const isDisabled = disabled || isLoading;
  const touchArea = "flex items-center justify-center min-h-44 min-w-44";
  const buttonStyles = "flex items-center justify-center border-none rounded-32 h-32 pl-16 pr-16 pt-8 pb-8";
  const colorStyles = isDisabled ? "bg-disabled text-disabled opacity-60 cursor-not-allowed" : variant === "secondary" ? "bg-white text-black border border-black cursor-pointer" : "bg-primary text-white cursor-pointer";
  return /* @__PURE__ */ jsx4(
    "button",
    {
      className: cn(touchArea, className),
      disabled: isDisabled,
      "data-component": "Button",
      "data-variant": variant,
      ...rest,
      children: /* @__PURE__ */ jsxs("span", { className: cn(buttonStyles, colorStyles), children: [
        isLoading && /* @__PURE__ */ jsx4("span", { className: style.spinner, "aria-hidden": "true" }),
        /* @__PURE__ */ jsx4("span", { children: isLoading ? loadingText : children })
      ] })
    }
  );
};
var Button_default = Button;

// IconButton/index.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var IconButton = ({
  children,
  className = "",
  disabled,
  ...rest
}) => {
  const styles2 = [
    "flex",
    "items-center",
    "justify-center",
    "min-h-44",
    "min-w-44",
    "bg-none",
    "border-none",
    "p-0",
    "cursor-pointer",
    disabled ? "opacity-60 cursor-not-allowed" : "",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx5("button", { className: styles2, disabled, ...rest, children });
};
var IconButton_default = IconButton;

// Avatar/index.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var SIZE_MAP = {
  SM: "h-36 w-36",
  LG: "h-96 w-96"
};
var Avatar = ({
  basePath = "",
  className = "",
  parameters = "",
  username = "",
  src,
  size = "SM"
}) => {
  return src ? /* @__PURE__ */ jsx6(
    "img",
    {
      className: [
        "object-fit",
        `${SIZE_MAP[size]}`,
        "rounded-full",
        className
      ].join(" "),
      src: `${basePath}/${src}${parameters}`,
      alt: "User avatar",
      "data-component": "Avatar"
    }
  ) : /* @__PURE__ */ jsx6(
    "span",
    {
      className: [
        "rounded-full flex justify-center items-center text-white bg-black font-semibold",
        `${SIZE_MAP[size]}`,
        className
      ].join(" "),
      "data-component": "Avatar",
      children: username.charAt(0)
    }
  );
};
var Avatar_default = Avatar;

// Inputs/FormField/index.tsx
import { nanoid } from "nanoid";
import "./color-5CGTXAKN.css";
import "./flex-FSFPHTYF.css";
import "./font-YEAWMAN2.css";
import "./margin-X2X4JJQ4.css";
import { jsx as jsx7, jsxs as jsxs2 } from "react/jsx-runtime";
var FormField = ({
  id,
  label,
  error,
  helperText,
  required,
  className,
  children
}) => {
  const inputId = id || `input-${nanoid(9)}`;
  const errorId = error ? `${inputId}-error` : void 0;
  const helperId = helperText ? `${inputId}-helper` : void 0;
  const describedBy = [errorId, helperId].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      className: ["flex flex-col gap-4", className].filter(Boolean).join(" "),
      "data-component": "FormField",
      children: [
        label && /* @__PURE__ */ jsxs2("label", { htmlFor: inputId, className: "font-semibold text-sm mb-6", children: [
          label,
          required && /* @__PURE__ */ jsx7("span", { className: "color-error ml-4", children: "*" })
        ] }),
        /* @__PURE__ */ jsx7(
          "div",
          {
            className: "h-full",
            "aria-invalid": !!error,
            ...describedBy && { "aria-describedby": describedBy },
            children
          }
        ),
        error && /* @__PURE__ */ jsx7("span", { id: errorId, className: "text-xs color-error mt-4", children: error }),
        helperText && !error && /* @__PURE__ */ jsx7("span", { id: helperId, className: "text-xs color-gray-500 mt-4", children: helperText })
      ]
    }
  );
};
var FormField_default = FormField;

// Inputs/Image/index.tsx
import React, { useEffect, useRef, useState } from "react";
import { Image as ImageIcon, Trash2 } from "react-feather";
import style2 from "./style.module-Z4UGOQBN.module.css";
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var getImage = (image) => {
  if (typeof image === "object") {
    const blob = new Blob([image], { type: "image/jpeg" });
    return URL.createObjectURL(blob);
  }
  return image;
};
var InputImage = ({
  className,
  onChange = () => {
  },
  value = null,
  removePlaceholder,
  selectPlaceholder = null
}) => {
  const didMount = useRef(false);
  const [imageFileState, setImageFileState] = useState(
    value
  );
  const inputRef = useRef(null);
  useEffect(() => {
    setImageFileState(value);
  }, [value]);
  useEffect(() => {
    if (didMount.current) {
      onChange(imageFileState);
    }
    didMount.current = true;
  }, [imageFileState, onChange]);
  return /* @__PURE__ */ jsxs3("div", { className: [style2.inputImage, "inputImage", className].join(" "), children: [
    imageFileState && /* @__PURE__ */ jsx8(
      "img",
      {
        className: style2.img,
        src: getImage(imageFileState),
        alt: "Selected image"
      }
    ),
    imageFileState && /* @__PURE__ */ jsx8(Bar_default, { className: style2.bar, children: removePlaceholder && /* @__PURE__ */ jsxs3(
      Button_default,
      {
        variant: "secondary",
        onClick: () => {
          setImageFileState(null);
        },
        children: [
          removePlaceholder,
          /* @__PURE__ */ jsx8(Trash2, { size: 18, className: "ml6" })
        ]
      }
    ) }),
    !imageFileState && /* @__PURE__ */ jsxs3(
      "button",
      {
        className: "w-full h-full border-none bg-none flex justify-center items-center",
        onClick: () => inputRef.current?.click(),
        children: [
          /* @__PURE__ */ jsx8(ImageIcon, { color: "#222", height: 24, width: 24 }),
          selectPlaceholder && /* @__PURE__ */ jsx8("span", { className: "m-8", children: selectPlaceholder })
        ]
      }
    ),
    /* @__PURE__ */ jsx8(
      "input",
      {
        className: style2.input,
        id: "input",
        type: "file",
        accept: "image/*;capture=camera",
        onChange: async (event) => {
          const file = event.target.files?.[0];
          if (file) {
            try {
              setImageFileState(file);
            } catch (error) {
              console.error(error);
            }
          }
        },
        ref: inputRef
      }
    )
  ] });
};
var Image_default = React.memo(InputImage);

// Inputs/Text/index.tsx
import { nanoid as nanoid2 } from "nanoid";
import { jsx as jsx9 } from "react/jsx-runtime";
var InputText = ({ id, required, className, ...rest }) => {
  const inputId = id || `input-${nanoid2(9)}`;
  const baseClass = "border-b box-sizing-border-box text-base h-44 outline-none mb-8 w-full pl-6";
  return /* @__PURE__ */ jsx9(
    "input",
    {
      id: inputId,
      type: "text",
      className: [baseClass, className].filter(Boolean).join(" "),
      ...rest
    }
  );
};
var Text_default = InputText;

// Inputs/Textarea/index.tsx
import React2 from "react";
import style3 from "./style.module-7SK7VOUQ.module.css";
import { jsx as jsx10 } from "react/jsx-runtime";
var Textarea = React2.forwardRef(
  ({ className, isEditMode, ...rest }, ref) => {
    return /* @__PURE__ */ jsx10(
      "textarea",
      {
        ref,
        className: [
          style3.textarea,
          className,
          `${isEditMode ? style3.editMode : void 0}`
        ].filter(Boolean).join(" "),
        ...rest
      }
    );
  }
);
Textarea.displayName = "Textarea";
var Textarea_default = Textarea;

// tokens.ts
var tokens = {
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
    errorBorder: "var(--color-error-border)"
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
    error: "var(--bg-error)"
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
    44: "var(--spacing-44)",
    56: "var(--spacing-56)",
    96: "var(--spacing-96)"
  },
  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    full: "var(--radius-full)"
  },
  fontSize: {
    12: "var(--font-size-12)",
    14: "var(--font-size-14)",
    16: "var(--font-size-16)",
    18: "var(--font-size-18)",
    24: "var(--font-size-24)"
  },
  fontWeight: {
    normal: "var(--font-weight-normal)",
    semibold: "var(--font-weight-semibold)",
    bold: "var(--font-weight-bold)"
  },
  size: {
    24: "var(--size-24)",
    32: "var(--size-32)",
    36: "var(--size-36)",
    44: "var(--size-44)",
    56: "var(--size-56)",
    96: "var(--size-96)"
  },
  transition: {
    fast: "var(--transition-fast)",
    base: "var(--transition-base)",
    slow: "var(--transition-slow)"
  },
  shadow: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  },
  zIndex: {
    base: "var(--z-base)",
    10: "var(--z-10)",
    20: "var(--z-20)",
    30: "var(--z-30)",
    40: "var(--z-40)",
    header: "var(--z-header)",
    dropdown: "var(--z-dropdown)",
    modal: "var(--z-modal)"
  }
};
var cssVars = {
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
  spacing44: "--spacing-44",
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
  size44: "--size-44",
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
  zModal: "--z-modal"
};
export {
  Anchor_default as Anchor,
  Avatar_default as Avatar,
  Bar_default as Bar,
  Button_default as Button,
  FormField_default as FormField,
  IconButton_default as IconButton,
  Image_default as InputImage,
  Text_default as InputText,
  ScrollView_default as ScrollView,
  Textarea_default as Textarea,
  cn,
  cssVars,
  tokens
};
