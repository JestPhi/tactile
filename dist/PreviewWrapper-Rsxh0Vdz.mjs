import { jsx as s, jsxs as i } from "react/jsx-runtime";
import { Link as I } from "react-router-dom";
import x, { useRef as _, useEffect as h, useState as j } from "react";
import { Trash2 as k, Image as B } from "react-feather";
const b = (...e) => e.filter(Boolean).join(" "), A = ({ children: e, className: t }) => /* @__PURE__ */ s(
  "div",
  {
    "data-component": "Bar",
    className: b("h-48", "w-full", "flex", "shrink-0", t),
    children: e
  }
), S = "_scrollView_egi0c_1", $ = {
  scrollView: S
}, se = ({ children: e }) => /* @__PURE__ */ i("div", { className: $.scrollView, "data-component": "ScrollView", children: [
  "Test",
  e
] }), oe = ({ children: e, className: t = "", ...n }) => /* @__PURE__ */ s(I, { className: ["flex items-center justify-center bg-none border-none cursor-pointer h-44 min-w-44 p-0", t].join(" "), ...n, children: e }), F = "_spinner_qzb4d_1", M = {
  spinner: F
}, R = ({
  children: e,
  className: t = "",
  disabled: n,
  isLoading: a = !1,
  loadingText: o = "Loading...",
  variant: l = "primary",
  ...c
}) => {
  const r = n || a, d = "flex items-center justify-center min-h-44 min-w-44", u = "flex items-center justify-center border-none rounded-32 h-32 pl-16 pr-16 pt-8 pb-8", m = r ? "bg-disabled text-disabled opacity-60 cursor-not-allowed" : l === "secondary" ? "bg-white text-black border border-black cursor-pointer" : "bg-primary text-white cursor-pointer";
  return /* @__PURE__ */ s(
    "button",
    {
      className: b(d, t),
      disabled: r,
      "data-component": "Button",
      "data-variant": l,
      ...c,
      children: /* @__PURE__ */ i("span", { className: b(u, m), children: [
        a && /* @__PURE__ */ s("span", { className: M.spinner, "aria-hidden": "true" }),
        /* @__PURE__ */ s("span", { children: a ? o : e })
      ] })
    }
  );
}, re = ({
  children: e,
  className: t = "",
  disabled: n,
  ...a
}) => {
  const o = [
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
  return /* @__PURE__ */ s(
    "button",
    {
      className: o,
      disabled: n,
      ...a,
      "data-component": "IconButton",
      children: e
    }
  );
};
function C(e) {
  const t = _(null);
  return h(() => {
    if (!e || !t.current) return;
    const n = t.current, a = n.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ), o = a[0], l = a[a.length - 1];
    o?.focus();
    const c = (r) => {
      r.key === "Tab" && (r.shiftKey ? document.activeElement === o && (r.preventDefault(), l?.focus()) : document.activeElement === l && (r.preventDefault(), o?.focus()));
    };
    return n.addEventListener("keydown", c), () => {
      n.removeEventListener("keydown", c);
    };
  }, [e]), t;
}
const E = "_modal_18h73_1", T = "_backdrop_18h73_21", V = "_content_18h73_29", f = {
  modal: E,
  backdrop: T,
  content: V
}, le = ({
  visible: e,
  onClose: t,
  children: n,
  height: a = "100dvh"
}) => {
  const o = C(e), l = () => {
    typeof t == "function" && t();
  };
  return e ? /* @__PURE__ */ i("div", { className: f.modal, ref: o, children: [
    /* @__PURE__ */ s("div", { className: f.backdrop, onClick: l }),
    /* @__PURE__ */ s("div", { className: f.content, style: { height: a }, children: n })
  ] }) : null;
}, ce = ({
  children: e,
  className: t,
  error: n,
  placeholder: a,
  disabled: o,
  ...l
}) => /* @__PURE__ */ i(
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
      o && "opacity-60 cursor-not-allowed bg-disabled",
      t
    ),
    disabled: o,
    "aria-invalid": n,
    ...l,
    children: [
      a && /* @__PURE__ */ s("option", { value: "", disabled: !0, children: a }),
      e
    ]
  }
), v = {
  SM: "h-36 w-36",
  LG: "h-96 w-96"
}, ie = ({
  basePath: e = "",
  className: t = "",
  parameters: n = "",
  username: a = "",
  src: o,
  size: l = "SM"
}) => o ? /* @__PURE__ */ s(
  "img",
  {
    className: [
      "object-fit",
      `${v[l]}`,
      "rounded-full",
      t
    ].join(" "),
    src: `${e}/${o}${n}`,
    alt: "User avatar",
    "data-component": "Avatar"
  }
) : /* @__PURE__ */ s(
  "span",
  {
    className: [
      "rounded-full flex justify-center items-center text-white bg-black font-semibold",
      `${v[l]}`,
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
  required: o,
  className: l,
  children: c
}) => {
  const r = e || `input-${w(9)}`, d = n ? `${r}-error` : void 0, u = a ? `${r}-helper` : void 0, m = [d, u].filter(Boolean).join(" ");
  return /* @__PURE__ */ i(
    "div",
    {
      className: ["flex flex-col gap-4", l].filter(Boolean).join(" "),
      "data-component": "FormField",
      children: [
        t && /* @__PURE__ */ i("label", { htmlFor: r, className: "font-semibold text-sm mb-6", children: [
          t,
          o && /* @__PURE__ */ s("span", { className: "color-error ml-4", children: "*" })
        ] }),
        /* @__PURE__ */ s(
          "div",
          {
            className: "h-full",
            "aria-invalid": !!n,
            ...m && { "aria-describedby": m },
            children: c
          }
        ),
        n && /* @__PURE__ */ s("span", { id: d, className: "text-xs color-error mt-4", children: n }),
        a && !n && /* @__PURE__ */ s("span", { id: u, className: "text-xs color-gray-500 mt-4", children: a })
      ]
    }
  );
}, D = "_input_vn3ls_1", L = "_img_vn3ls_7", U = "_inputImage_vn3ls_19", z = "_removeImage_vn3ls_31", K = "_buttonAddImage_vn3ls_39", G = "_square_vn3ls_73", O = "_avatar_vn3ls_81", P = "_small_vn3ls_93", W = "_large_vn3ls_105", Z = "_bar_vn3ls_113", p = {
  input: D,
  img: L,
  inputImage: U,
  removeImage: z,
  buttonAddImage: K,
  default: "_default_vn3ls_65",
  square: G,
  avatar: O,
  small: P,
  large: W,
  bar: Z
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
  selectPlaceholder: o = null,
  variant: l = "default"
}) => {
  const c = _(!1), [r, d] = j(
    n
  ), u = _(null);
  return h(() => {
    d(n);
  }, [n]), h(() => {
    c.current && t(r), c.current = !0;
  }, [r, t]), /* @__PURE__ */ i(
    "div",
    {
      className: [
        p.inputImage,
        p[l],
        "inputImage",
        e
      ].join(" "),
      children: [
        r && /* @__PURE__ */ s(
          "img",
          {
            className: p.img,
            src: H(r),
            alt: "Selected image"
          }
        ),
        r && /* @__PURE__ */ s(A, { className: p.bar, children: a && /* @__PURE__ */ i(
          R,
          {
            variant: "secondary",
            onClick: () => {
              d(null);
            },
            children: [
              a,
              /* @__PURE__ */ s(k, { size: 18, className: "ml6" })
            ]
          }
        ) }),
        !r && /* @__PURE__ */ i(
          "button",
          {
            className: "align-items w-full h-full border-none bg-none flex justify-center items-center",
            onClick: () => u.current?.click(),
            children: [
              /* @__PURE__ */ s(B, { color: "#222", height: 24, width: 24 }),
              o && /* @__PURE__ */ s("span", { className: "m-8", children: o })
            ]
          }
        ),
        /* @__PURE__ */ s(
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
                  d(g);
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
  const o = e || `input-${w(9)}`;
  return /* @__PURE__ */ s(
    "input",
    {
      id: o,
      type: "text",
      className: ["border-b box-sizing-border-box text-base h-44 outline-none mb-8 w-full pl-6", n].filter(Boolean).join(" "),
      ...a
    }
  );
}, Q = "_textarea_1dtvz_1", X = "_editMode_1dtvz_31", y = {
  textarea: Q,
  editMode: X
}, Y = x.forwardRef(
  ({ className: e, isEditMode: t, ...n }, a) => /* @__PURE__ */ s(
    "textarea",
    {
      ref: a,
      className: [
        y.textarea,
        e,
        `${t ? y.editMode : void 0}`
      ].filter(Boolean).join(" "),
      ...n
    }
  )
);
Y.displayName = "Textarea";
const pe = ({
  children: e,
  className: t = ""
}) => /* @__PURE__ */ s("div", { className: `preview-wrapper ${t}`, children: e });
export {
  oe as A,
  A as B,
  ce as D,
  de as F,
  re as I,
  le as M,
  pe as P,
  se as S,
  Y as T,
  R as a,
  ie as b,
  me as c,
  b as d,
  ue as i,
  C as u
};
