"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var index_exports = {};
__export(index_exports, {
  Anchor: () => Anchor_default,
  Avatar: () => Avatar_default,
  Bar: () => Bar_default,
  Button: () => Button_default,
  Dropdown: () => Dropdown_default,
  FormField: () => FormField_default,
  IconButton: () => IconButton_default,
  InputImage: () => Image_default,
  InputText: () => Text_default,
  Modal: () => Modal_default,
  PreviewWrapper: () => PreviewWrapper_default,
  ScrollView: () => ScrollView_default,
  Textarea: () => Textarea_default,
  cn: () => cn,
  useFocusTrap: () => useFocusTrap
});
module.exports = __toCommonJS(index_exports);

// utils/classNames.ts
var cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Bar/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Bar = ({ children, className }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
var ScrollView = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: style_default.scrollView, "data-component": "ScrollView", children: [
    "Test",
    children
  ] });
};
var ScrollView_default = ScrollView;

// Anchor/index.tsx
var import_react_router_dom = require("react-router-dom");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Anchor = ({ children, className = "", ...rest }) => {
  const baseClasses = "flex items-center justify-center bg-none border-none cursor-pointer h-44 min-w-44 p-0";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom.Link, { className: [baseClasses, className].join(" "), ...rest, children });
};
var Anchor_default = Anchor;

// Button/style.module.css
var style_default2 = {};

// Button/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "button",
    {
      className: cn(touchArea, className),
      disabled: isDisabled,
      "data-component": "Button",
      "data-variant": variant,
      ...rest,
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: cn(buttonStyles, colorStyles), children: [
        isLoading && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: style_default2.spinner, "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: isLoading ? loadingText : children })
      ] })
    }
  );
};
var Button_default = Button;

// IconButton/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var import_react = require("react");
function useFocusTrap(isActive) {
  const elementRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
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
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: style_default3.modal, ref: modalRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: style_default3.backdrop, onClick: handleClose }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: style_default3.content, style: { height }, children })
  ] });
};
var Modal_default = Modal;

// Dropdown/index.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var Dropdown = ({
  children,
  className,
  error,
  placeholder,
  disabled,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
        placeholder && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: "", disabled: true, children: placeholder }),
        children
      ]
    }
  );
};
var Dropdown_default = Dropdown;

// Avatar/index.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  return src ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
  ) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
var import_nanoid = require("nanoid");
var import_jsx_runtime9 = require("react/jsx-runtime");
var FormField = ({
  id,
  label,
  error,
  helperText,
  required,
  className,
  children
}) => {
  const inputId = id || `input-${(0, import_nanoid.nanoid)(9)}`;
  const errorId = error ? `${inputId}-error` : void 0;
  const helperId = helperText ? `${inputId}-helper` : void 0;
  const describedBy = [errorId, helperId].filter(Boolean).join(" ");
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "div",
    {
      className: ["flex flex-col gap-4", className].filter(Boolean).join(" "),
      "data-component": "FormField",
      children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { htmlFor: inputId, className: "font-semibold text-sm mb-6", children: [
          label,
          required && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "color-error ml-4", children: "*" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "div",
          {
            className: "h-full",
            "aria-invalid": !!error,
            ...describedBy && { "aria-describedby": describedBy },
            children
          }
        ),
        error && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { id: errorId, className: "text-xs color-error mt-4", children: error }),
        helperText && !error && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { id: helperId, className: "text-xs color-gray-500 mt-4", children: helperText })
      ]
    }
  );
};
var FormField_default = FormField;

// Inputs/Image/index.tsx
var import_react2 = __toESM(require("react"));
var import_react_feather = require("react-feather");

// Inputs/Image/style.module.css
var style_default4 = {};

// Inputs/Image/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
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
  const didMount = (0, import_react2.useRef)(false);
  const [imageFileState, setImageFileState] = (0, import_react2.useState)(
    value
  );
  const inputRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    setImageFileState(value);
  }, [value]);
  (0, import_react2.useEffect)(() => {
    if (didMount.current) {
      onChange(imageFileState);
    }
    didMount.current = true;
  }, [imageFileState, onChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "div",
    {
      className: [
        style_default4.inputImage,
        style_default4[variant],
        "inputImage",
        className
      ].join(" "),
      children: [
        imageFileState && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "img",
          {
            className: style_default4.img,
            src: getImage(imageFileState),
            alt: "Selected image"
          }
        ),
        imageFileState && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Bar_default, { className: style_default4.bar, children: removePlaceholder && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          Button_default,
          {
            variant: "secondary",
            onClick: () => {
              setImageFileState(null);
            },
            children: [
              removePlaceholder,
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_feather.Trash2, { size: 18, className: "ml6" })
            ]
          }
        ) }),
        !imageFileState && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          "button",
          {
            className: "align-items w-full h-full border-none bg-none flex justify-center items-center",
            onClick: () => inputRef.current?.click(),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_feather.Image, { color: "#222", height: 24, width: 24 }),
              selectPlaceholder && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "m-8", children: selectPlaceholder })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var Image_default = import_react2.default.memo(InputImage);

// Inputs/Text/index.tsx
var import_nanoid2 = require("nanoid");
var import_jsx_runtime11 = require("react/jsx-runtime");
var InputText = ({ id, required, className, ...rest }) => {
  const inputId = id || `input-${(0, import_nanoid2.nanoid)(9)}`;
  const baseClass = "border-b box-sizing-border-box text-base h-44 outline-none mb-8 w-full pl-6";
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
var import_react3 = __toESM(require("react"));

// Inputs/Textarea/style.module.css
var style_default5 = {};

// Inputs/Textarea/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var Textarea = import_react3.default.forwardRef(
  ({ className, isEditMode, ...rest }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
var import_jsx_runtime13 = require("react/jsx-runtime");
var PreviewWrapper = ({
  children,
  className = ""
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: `preview-wrapper ${className}`, children });
};
var PreviewWrapper_default = PreviewWrapper;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Anchor,
  Avatar,
  Bar,
  Button,
  Dropdown,
  FormField,
  IconButton,
  InputImage,
  InputText,
  Modal,
  PreviewWrapper,
  ScrollView,
  Textarea,
  cn,
  useFocusTrap
});
