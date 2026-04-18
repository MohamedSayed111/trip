import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-BodDEdIw.js";
import { u as useI18n, a as useNavigate, L as Link } from "./router-DvcW9c65.js";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const LucideContext = reactExports.createContext({});
const useLucideContext = () => reactExports.useContext(LucideContext);
const Icon = reactExports.forwardRef(
  ({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
    const {
      size: contextSize = 24,
      strokeWidth: contextStrokeWidth = 2,
      absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
      color: contextColor = "currentColor",
      className: contextClass = ""
    } = useLucideContext() ?? {};
    const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
    return reactExports.createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size ?? contextSize ?? defaultAttributes.width,
        height: size ?? contextSize ?? defaultAttributes.height,
        stroke: color ?? contextColor,
        strokeWidth: calculatedStrokeWidth,
        className: mergeClasses("lucide", contextClass, className),
        ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$6 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode$6);
const __iconNode$5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$5);
const __iconNode$4 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const logo = "/assets/logo-CHhEdxMa.png";
function Header() {
  const { t, locale, toggle } = useI18n();
  const [open, setOpen] = reactExports.useState(false);
  const navigate = useNavigate();
  const links = [
    { to: "/", label: t.nav.home },
    { to: "/transfers", label: t.nav.transfers },
    { to: "/tours", label: t.nav.tours },
    //{ to: "/sim-cards", label: t.nav.sim },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 backdrop-blur-lg bg-background/85 border-b border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 font-bold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: t.brand, className: "w-12 h-12 rounded-full bg-primary p-1 shadow-gold", width: 48, height: 48 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight hidden sm:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-black", children: t.brand }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "ON TIME 24/7" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          className: "px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors",
          activeProps: { className: "px-3 py-2 rounded-lg text-sm font-bold text-primary-foreground bg-foreground" },
          activeOptions: { exact: true },
          children: l.label
        },
        l.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: toggle,
            "aria-label": "Switch language",
            className: "hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold border border-border hover:bg-secondary transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4" }),
              locale === "ar" ? "EN" : "ع"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => navigate({ to: "/contact" }),
            className: "hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-hero text-primary-foreground text-sm font-bold shadow-gold hover:opacity-90 transition-opacity",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
              t.contact.callUs
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setOpen((v) => !v),
            className: "lg:hidden p-2 rounded-lg hover:bg-secondary",
            "aria-label": "Menu",
            children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" })
          }
        )
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1", children: [
      links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          onClick: () => setOpen(false),
          className: "px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary",
          activeProps: { className: "px-3 py-2.5 rounded-lg text-sm font-bold bg-foreground text-primary-foreground" },
          activeOptions: { exact: true },
          children: l.label
        },
        l.to
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            toggle();
            setOpen(false);
          },
          className: "mt-2 px-3 py-2.5 rounded-lg text-sm font-semibold border border-border text-start",
          children: locale === "ar" ? "English" : "العربية"
        }
      )
    ] }) })
  ] });
}
function Footer() {
  const { t } = useI18n();
  const links = [
    { to: "/", label: t.nav.home },
    { to: "/transfers", label: t.nav.transfers },
    { to: "/tours", label: t.nav.tours },
    { to: "/sim-cards", label: t.nav.sim },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 gradient-dark text-background dark:text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-black text-2xl mb-3 text-primary", children: t.brand }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-background/70 leading-relaxed", children: t.footer.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/15 text-primary text-xs font-bold border border-primary/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
          " ON TIME 24/7"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-4 text-primary", children: t.footer.links }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-background/70", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "hover:text-primary transition-colors", children: l.label }) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold mb-4 text-primary", children: t.footer.contact }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-background/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 text-primary" }),
            " +20 100 000 0000"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 text-primary" }),
            " info@nstaxis.eg"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-primary" }),
            " ",
            t.contact.address
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-background/10 py-4 text-center text-xs text-background/50", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      t.brand,
      ". ",
      t.footer.rights,
      "."
    ] })
  ] });
}
export {
  Clock as C,
  Footer as F,
  Header as H,
  Mail as M,
  Phone as P,
  MapPin as a,
  createLucideIcon as c
};
