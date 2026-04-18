import { T as jsxRuntimeExports } from "./worker-entry-BodDEdIw.js";
import { H as Header, F as Footer } from "./Footer-hPmebnWR.js";
import { u as useI18n } from "./router-DvcW9c65.js";
import { h as heroLimo } from "./hero-limousine-CwamXe2E.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function AboutPage() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-72 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroLimo, alt: "", className: "absolute inset-0 w-full h-full object-cover", width: 1920, height: 1080 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-overlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-end pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-black text-background", children: t.about.title }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-foreground/80 leading-relaxed mb-5", children: t.about.p1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-foreground/80 leading-relaxed mb-12", children: t.about.p2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [{
          n: "+10",
          l: t.about.stats.years
        }, {
          n: "+5K",
          l: t.about.stats.customers
        }, {
          n: "+1000",
          l: t.about.stats.tours
        }, {
          n: "+25",
          l: t.about.stats.cars
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border text-center hover:border-primary transition-colors shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-black text-gradient-gold mb-1", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground font-medium", children: s.l })
        ] }, s.l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  AboutPage as component
};
