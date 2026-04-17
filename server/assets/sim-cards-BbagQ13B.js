import { T as jsxRuntimeExports } from "./worker-entry-9FBlegrf.js";
import { u as useI18n, L as Link } from "./router-PI378_YA.js";
import { c as createLucideIcon, H as Header, F as Footer } from "./Footer-DwyT1Pjk.js";
import { s as simPlans } from "./mock-Be7jAhRl.js";
import { h as heroPyramids } from "./hero-pyramids-Cev68d-n.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function SimPage() {
  const {
    t,
    locale
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-72 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroPyramids, alt: "", className: "absolute inset-0 w-full h-full object-cover", width: 1920, height: 1080 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-overlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10 text-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-black mb-2", children: t.simPage.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background/85 max-w-2xl", children: t.simPage.sub })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: simPlans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative rounded-2xl p-7 border-2 transition-all duration-300 hover:-translate-y-1 ${plan.popular ? "border-primary bg-card shadow-gold scale-[1.02]" : "border-border bg-card shadow-card hover:border-primary/50"}`, children: [
        plan.popular && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute -top-3 start-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full gradient-hero text-primary-foreground text-xs font-black shadow-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-current" }),
          " ",
          locale === "ar" ? "الأكثر مبيعاً" : "Best Seller"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-black text-xl mb-1", children: locale === "ar" ? plan.nameAr : plan.nameEn }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground mb-5", children: [
          t.simPage.validity,
          ": ",
          locale === "ar" ? plan.validityAr : plan.validityEn
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-5xl font-black text-gradient-gold", children: [
          "$",
          plan.price
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 p-4 rounded-xl bg-secondary/60 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: t.simPage.data }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-black", children: plan.data })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 mb-7", children: plan.features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full bg-primary/20 text-primary grid place-items-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3 h-3" }) }),
          locale === "ar" ? f.ar : f.en
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: `block text-center px-5 py-3 rounded-xl font-bold transition-all ${plan.popular ? "gradient-hero text-primary-foreground shadow-gold hover:scale-[1.02]" : "bg-foreground text-background hover:bg-foreground/85"}`, children: t.simPage.buy })
      ] }, plan.id)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  SimPage as component
};
