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
      className: cn("h-48", "w-full", "flex", "shrink-0", className),
      children
    }
  );
};
var Bar_default = Bar;

// ScrollView/style.module.css
var style_default = {};

// ScrollView/index.tsx
import { jsxs } from "react/jsx-runtime";
var ScrollView = ({ children }) => {
  return /* @__PURE__ */ jsxs("div", { className: style_default.scrollView, "data-component": "ScrollView", children: [
    "Test",
    children
  ] });
};
var ScrollView_default = ScrollView;

// Anchor/index.tsx
import { Link } from "react-router-dom";
import { jsx as jsx2 } from "react/jsx-runtime";
var Anchor = ({ children, className = "", ...rest }) => {
  const baseClasses = "flex items-center justify-center bg-none border-none cursor-pointer h-44 min-w-44 p-0";
  return /* @__PURE__ */ jsx2(Link, { className: [baseClasses, className].join(" "), ...rest, children });
};
var Anchor_default = Anchor;

// Button/style.module.css
var style_default2 = {};

// Button/index.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx3(
    "button",
    {
      className: cn(touchArea, className),
      disabled: isDisabled,
      "data-component": "Button",
      "data-variant": variant,
      ...rest,
      children: /* @__PURE__ */ jsxs2("span", { className: cn(buttonStyles, colorStyles), children: [
        isLoading && /* @__PURE__ */ jsx3("span", { className: style_default2.spinner, "aria-hidden": "true" }),
        /* @__PURE__ */ jsx3("span", { children: isLoading ? loadingText : children })
      ] })
    }
  );
};
var Button_default = Button;

// IconButton/index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var IconButton = ({
  children,
  className = "",
  disabled,
  ...rest
}) => {
  const styles = [
    "flex",
    "items-center",
    "justify-center",
    "min-h-48",
    "min-w-48",
    "bg-none",
    "border-none",
    "p-0",
    "cursor-pointer",
    disabled ? "opacity-60 cursor-not-allowed" : "",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx4(
    "button",
    {
      className: styles,
      disabled,
      ...rest,
      "data-component": "IconButton",
      children
    }
  );
};
var IconButton_default = IconButton;

// utils/useFocusTrap.ts
import { useEffect, useRef } from "react";
function useFocusTrap(isActive) {
  const elementRef = useRef(null);
  useEffect(() => {
    if (!isActive || !elementRef.current) return;
    const element = elementRef.current;
    const focusableElements = element.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    firstFocusable?.focus();
    const handleTabKey = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };
    element.addEventListener("keydown", handleTabKey);
    return () => {
      element.removeEventListener("keydown", handleTabKey);
    };
  }, [isActive]);
  return elementRef;
}

// Modal/style.module.css
var style_default3 = {};

// Modal/index.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var Modal = ({
  visible,
  onClose,
  children,
  height = "100dvh"
}) => {
  const modalRef = useFocusTrap(visible);
  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };
  if (!visible) {
    return null;
  }
  return /* @__PURE__ */ jsxs3("div", { className: style_default3.modal, ref: modalRef, children: [
    /* @__PURE__ */ jsx5("div", { className: style_default3.backdrop, onClick: handleClose }),
    /* @__PURE__ */ jsx5("div", { className: style_default3.content, style: { height }, children })
  ] });
};
var Modal_default = Modal;

// Dropdown/index.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var Dropdown = ({
  children,
  className,
  error,
  placeholder,
  disabled,
  ...rest
}) => {
  return /* @__PURE__ */ jsxs4(
    "select",
    {
      "data-component": "Dropdown",
      className: cn(
        "min-h-48 w-full",
        "px-16 py-8",
        "border-b",
        "bg-white",
        "text-base",
        "cursor-pointer",
        "outline-none",
        error && "border-error",
        disabled && "opacity-60 cursor-not-allowed bg-disabled",
        className
      ),
      disabled,
      "aria-invalid": error,
      ...rest,
      children: [
        placeholder && /* @__PURE__ */ jsx6("option", { value: "", disabled: true, children: placeholder }),
        children
      ]
    }
  );
};
var Dropdown_default = Dropdown;

// Avatar/index.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
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
  return src ? /* @__PURE__ */ jsx7(
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
  ) : /* @__PURE__ */ jsx7(
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
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: ["flex flex-col gap-4", className].filter(Boolean).join(" "),
      "data-component": "FormField",
      children: [
        label && /* @__PURE__ */ jsxs5("label", { htmlFor: inputId, className: "font-semibold text-sm mb-6", children: [
          label,
          required && /* @__PURE__ */ jsx8("span", { className: "color-error ml-4", children: "*" })
        ] }),
        /* @__PURE__ */ jsx8(
          "div",
          {
            className: "h-full",
            "aria-invalid": !!error,
            ...describedBy && { "aria-describedby": describedBy },
            children
          }
        ),
        error && /* @__PURE__ */ jsx8("span", { id: errorId, className: "text-xs color-error mt-4", children: error }),
        helperText && !error && /* @__PURE__ */ jsx8("span", { id: helperId, className: "text-xs color-gray-500 mt-4", children: helperText })
      ]
    }
  );
};
var FormField_default = FormField;

// Inputs/Image/index.tsx
import React, { useEffect as useEffect2, useRef as useRef2, useState } from "react";
import { Image as ImageIcon, Trash2 } from "react-feather";

// Inputs/Image/style.module.css
var style_default4 = {};

// Inputs/Image/index.tsx
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
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
  selectPlaceholder = null,
  variant = "default"
}) => {
  const didMount = useRef2(false);
  const [imageFileState, setImageFileState] = useState(
    value
  );
  const inputRef = useRef2(null);
  useEffect2(() => {
    setImageFileState(value);
  }, [value]);
  useEffect2(() => {
    if (didMount.current) {
      onChange(imageFileState);
    }
    didMount.current = true;
  }, [imageFileState, onChange]);
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      className: [
        style_default4.inputImage,
        style_default4[variant],
        "inputImage",
        className
      ].join(" "),
      children: [
        imageFileState && /* @__PURE__ */ jsx9(
          "img",
          {
            className: style_default4.img,
            src: getImage(imageFileState),
            alt: "Selected image"
          }
        ),
        imageFileState && /* @__PURE__ */ jsx9(Bar_default, { className: style_default4.bar, children: removePlaceholder && /* @__PURE__ */ jsxs6(
          Button_default,
          {
            variant: "secondary",
            onClick: () => {
              setImageFileState(null);
            },
            children: [
              removePlaceholder,
              /* @__PURE__ */ jsx9(Trash2, { size: 18, className: "ml6" })
            ]
          }
        ) }),
        !imageFileState && /* @__PURE__ */ jsxs6(
          "button",
          {
            className: "align-items w-full h-full border-none bg-none flex justify-center items-center",
            onClick: () => inputRef.current?.click(),
            children: [
              /* @__PURE__ */ jsx9(ImageIcon, { color: "#222", height: 24, width: 24 }),
              selectPlaceholder && /* @__PURE__ */ jsx9("span", { className: "m-8", children: selectPlaceholder })
            ]
          }
        ),
        /* @__PURE__ */ jsx9(
          "input",
          {
            className: style_default4.input,
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
      ]
    }
  );
};
var Image_default = React.memo(InputImage);

// Inputs/Text/index.tsx
import { nanoid as nanoid2 } from "nanoid";
import { jsx as jsx10 } from "react/jsx-runtime";
var InputText = ({ id, required, className, ...rest }) => {
  const inputId = id || `input-${nanoid2(9)}`;
  const baseClass = "border-b box-sizing-border-box text-base h-44 outline-none mb-8 w-full pl-6";
  return /* @__PURE__ */ jsx10(
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

// Inputs/Textarea/style.module.css
var style_default5 = {};

// Inputs/Textarea/index.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var Textarea = React2.forwardRef(
  ({ className, isEditMode, ...rest }, ref) => {
    return /* @__PURE__ */ jsx11(
      "textarea",
      {
        ref,
        className: [
          style_default5.textarea,
          className,
          `${isEditMode ? style_default5.editMode : void 0}`
        ].filter(Boolean).join(" "),
        ...rest
      }
    );
  }
);
Textarea.displayName = "Textarea";
var Textarea_default = Textarea;

// PreviewWrapper.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var PreviewWrapper = ({
  children,
  className = ""
}) => {
  return /* @__PURE__ */ jsx12("div", { className: `preview-wrapper ${className}`, children });
};
var PreviewWrapper_default = PreviewWrapper;

export {
  cn,
  Bar_default,
  ScrollView_default,
  Anchor_default,
  Button_default,
  IconButton_default,
  useFocusTrap,
  Modal_default,
  Dropdown_default,
  Avatar_default,
  FormField_default,
  Image_default,
  Text_default,
  Textarea_default,
  PreviewWrapper_default
};
