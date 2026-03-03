import { jsx as o, jsxs as d } from "react/jsx-runtime";
import { Link as I } from "react-router-dom";
import x, { useRef as _, useEffect as h, useState as j } from "react";
import { Trash2 as k, Image as B } from "react-feather";
const b = (...e) => e.filter(Boolean).join(" "), A = ({ children: e, className: t }) => /* @__PURE__ */ o(
  "div",
  {
    "data-component": "Bar",
    className: b("h-48", "w-full", "flex", "shrink-0", t),
    children: e
  }
), S = "_scrollView_egi0c_1", $ = {
  scrollView: S
}, oe = ({ children: e }) => /* @__PURE__ */ o("div", { className: $.scrollView, "data-component": "ScrollView", children: e }), se = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ o(
  I,
  {
    className: ["flex items-center justify-center bg-none border-none cursor-pointer h-44 min-w-44 p-0", t].join(" "),
    ...n,
    "data-component": "Anchor",
    children: e
  }
), F = "_spinner_qzb4d_1", M = {
  spinner: F
}, R = ({
  children: e,
  className: t = "",
  disabled: n,
  isLoading: a = !1,
  loadingText: s = "Loading...",
  variant: l = "primary",
  ...c
}) => {
  const r = n || a, i = "flex items-center justify-center min-h-44 min-w-44", u = "flex items-center justify-center border-none rounded-32 h-32 pl-16 pr-16 pt-8 pb-8", m = r ? "bg-disabled text-disabled opacity-60 cursor-not-allowed" : l === "secondary" ? "bg-white text-black border border-black cursor-pointer" : "bg-primary text-white cursor-pointer";
  return /* @__PURE__ */ o(
    "button",
    {
      className: b(i, t),
      disabled: r,
      "data-component": "Button",
      "data-variant": l,
      ...c,
      children: /* @__PURE__ */ d("span", { className: b(u, m), children: [
        a && /* @__PURE__ */ o("span", { className: M.spinner, "aria-hidden": "true" }),
        /* @__PURE__ */ o("span", { children: a ? s : e })
      ] })
    }
  );
}, re = ({
  children: e,
  className: t = "",
  disabled: n,
  ...a
}) => {
  const s = [
    "flex",
    "items-center",
    "justify-center",
    "min-h-48",
    "min-w-48",
    "bg-none",
    "border-none",
    "p-0",
    "cursor-pointer",
    n ? "opacity-60 cursor-not-allowed" : "",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(
    "button",
    {
      className: s,
      disabled: n,
      ...a,
      "data-component": "IconButton",
      children: e
    }
  );
};
function T(e) {
  const t = _(null);
  return h(() => {
    if (!e || !t.current) return;
    const n = t.current, a = n.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ), s = a[0], l = a[a.length - 1];
    s?.focus();
    const c = (r) => {
      r.key === "Tab" && (r.shiftKey ? document.activeElement === s && (r.preventDefault(), l?.focus()) : document.activeElement === l && (r.preventDefault(), s?.focus()));
    };
    return n.addEventListener("keydown", c), () => {
      n.removeEventListener("keydown", c);
    };
  }, [e]), t;
}
const C = "_modal_18h73_1", E = "_backdrop_18h73_21", V = "_content_18h73_29", f = {
  modal: C,
  backdrop: E,
  content: V
}, le = ({
  visible: e,
  onClose: t,
  children: n,
  height: a = "100dvh"
}) => {
  const s = T(e), l = () => {
    typeof t == "function" && t();
  };
  return e ? /* @__PURE__ */ d("div", { className: f.modal, ref: s, "data-component": "Modal", children: [
    /* @__PURE__ */ o("div", { className: f.backdrop, onClick: l }),
    /* @__PURE__ */ o("div", { className: f.content, style: { height: a }, children: n })
  ] }) : null;
}, ce = ({
  children: e,
  className: t,
  error: n,
  placeholder: a,
  disabled: s,
  ...l
}) => /* @__PURE__ */ d(
  "select",
  {
    "data-component": "Dropdown",
    className: b(
      "min-h-48 w-full",
      "px-16 py-8",
      "border-b",
      "bg-white",
      "text-base",
      "cursor-pointer",
      "outline-none",
      n && "border-error",
      s && "opacity-60 cursor-not-allowed bg-disabled",
      t
    ),
    disabled: s,
    "aria-invalid": n,
    ...l,
    children: [
      a && /* @__PURE__ */ o("option", { value: "", disabled: !0, children: a }),
      e
    ]
  }
), y = {
  SM: "h-36 w-36",
  LG: "h-96 w-96"
}, ie = ({
  basePath: e = "",
  className: t = "",
  parameters: n = "",
  username: a = "",
  src: s,
  size: l = "SM"
}) => s ? /* @__PURE__ */ o(
  "img",
  {
    className: [
      "object-fit",
      `${y[l]}`,
      "rounded-full",
      t
    ].join(" "),
    src: `${e}/${s}${n}`,
    alt: "User avatar",
    "data-component": "Avatar"
  }
) : /* @__PURE__ */ o(
  "span",
  {
    className: [
      "rounded-full flex justify-center items-center text-white bg-black font-semibold",
      `${y[l]}`,
      t
    ].join(" "),
    "data-component": "Avatar",
    children: a.charAt(0)
  }
), q = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let w = (e = 21) => {
  let t = "", n = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += q[n[e] & 63];
  return t;
};
const de = ({
  id: e,
  label: t,
  error: n,
  helperText: a,
  required: s,
  className: l,
  children: c
}) => {
  const r = e || `input-${w(9)}`, i = n ? `${r}-error` : void 0, u = a ? `${r}-helper` : void 0, m = [i, u].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(
    "div",
    {
      className: ["flex flex-col gap-4", l].filter(Boolean).join(" "),
      "data-component": "FormField",
      children: [
        t && /* @__PURE__ */ d("label", { htmlFor: r, className: "font-semibold text-sm mb-6", children: [
          t,
          s && /* @__PURE__ */ o("span", { className: "color-error ml-4", children: "*" })
        ] }),
        /* @__PURE__ */ o(
          "div",
          {
            className: "h-full",
            "aria-invalid": !!n,
            ...m && { "aria-describedby": m },
            children: c
          }
        ),
        n && /* @__PURE__ */ o("span", { id: i, className: "text-xs color-error mt-4", children: n }),
        a && !n && /* @__PURE__ */ o("span", { id: u, className: "text-xs color-gray-500 mt-4", children: a })
      ]
    }
  );
}, D = "_input_vn3ls_1", L = "_img_vn3ls_7", U = "_inputImage_vn3ls_19", K = "_removeImage_vn3ls_31", G = "_buttonAddImage_vn3ls_39", O = "_square_vn3ls_73", P = "_avatar_vn3ls_81", W = "_small_vn3ls_93", Z = "_large_vn3ls_105", z = "_bar_vn3ls_113", p = {
  input: D,
  img: L,
  inputImage: U,
  removeImage: K,
  buttonAddImage: G,
  default: "_default_vn3ls_65",
  square: O,
  avatar: P,
  small: W,
  large: Z,
  bar: z
}, H = (e) => {
  if (typeof e == "object") {
    const t = new Blob([e], { type: "image/jpeg" });
    return URL.createObjectURL(t);
  }
  return e;
}, J = ({
  className: e,
  onChange: t = () => {
  },
  value: n = null,
  removePlaceholder: a,
  selectPlaceholder: s = null,
  variant: l = "default"
}) => {
  const c = _(!1), [r, i] = j(
    n
  ), u = _(null);
  return h(() => {
    i(n);
  }, [n]), h(() => {
    c.current && t(r), c.current = !0;
  }, [r, t]), /* @__PURE__ */ d(
    "div",
    {
      className: [
        p.inputImage,
        p[l],
        "inputImage",
        e
      ].join(" "),
      "data-component": "Image",
      children: [
        r && /* @__PURE__ */ o(
          "img",
          {
            className: p.img,
            src: H(r),
            alt: "Selected image"
          }
        ),
        r && /* @__PURE__ */ o(A, { className: p.bar, children: a && /* @__PURE__ */ d(
          R,
          {
            variant: "secondary",
            onClick: () => {
              i(null);
            },
            children: [
              a,
              /* @__PURE__ */ o(k, { size: 18, className: "ml6" })
            ]
          }
        ) }),
        !r && /* @__PURE__ */ d(
          "button",
          {
            className: "align-items w-full h-full border-none bg-none flex justify-center items-center",
            onClick: () => u.current?.click(),
            children: [
              /* @__PURE__ */ o(B, { color: "#222", height: 24, width: 24 }),
              s && /* @__PURE__ */ o("span", { className: "m-8", children: s })
            ]
          }
        ),
        /* @__PURE__ */ o(
          "input",
          {
            className: p.input,
            id: "input",
            type: "file",
            accept: "image/*;capture=camera",
            onChange: async (m) => {
              const g = m.target.files?.[0];
              if (g)
                try {
                  i(g);
                } catch (N) {
                  console.error(N);
                }
            },
            ref: u
          }
        )
      ]
    }
  );
}, ue = x.memo(J), me = ({ id: e, required: t, className: n, ...a }) => {
  const s = e || `input-${w(9)}`;
  return /* @__PURE__ */ o(
    "input",
    {
      id: s,
      type: "text",
      className: ["border-b box-sizing-border-box text-base h-44 outline-none mb-8 w-full pl-6", n].filter(Boolean).join(" "),
      "data-component": "InputText",
      ...a
    }
  );
}, Q = "_textarea_h86ox_1", X = "_editMode_h86ox_29", v = {
  textarea: Q,
  editMode: X
}, Y = x.forwardRef(
  ({ className: e, isEditMode: t, ...n }, a) => /* @__PURE__ */ o(
    "textarea",
    {
      ref: a,
      className: [
        v.textarea,
        e,
        `${t ? v.editMode : void 0}`
      ].filter(Boolean).join(" "),
      ...n,
      "data-component": "InputTextarea"
    }
  )
);
Y.displayName = "Textarea";
const pe = ({
  children: e,
  className: t = ""
}) => /* @__PURE__ */ o("div", { className: `preview-wrapper ${t}`, children: e });
export {
  se as A,
  A as B,
  ce as D,
  de as F,
  re as I,
  le as M,
  pe as P,
  oe as S,
  Y as T,
  R as a,
  ie as b,
  me as c,
  b as d,
  ue as i,
  T as u
};
