import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-9FBlegrf.js";
import { u as useI18n, R as Route, L as Link } from "./router-PI378_YA.js";
import { H as Header, C as Clock, F as Footer } from "./Footer-DwyT1Pjk.js";
import { t as tours, a as tourCategories } from "./mock-Be7jAhRl.js";
import { h as heroPyramids } from "./hero-pyramids-Cev68d-n.js";
import { A as ArrowLeft } from "./arrow-left-4NlSlVe2.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ToursPage() {
  const {
    t,
    locale
  } = useI18n();
  const search = Route.useSearch();
  const [cat, setCat] = reactExports.useState(search.category ?? "all");
  const filtered = reactExports.useMemo(() => cat === "all" ? tours : tours.filter((x) => x.category === cat), [cat]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-72 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroPyramids, alt: "", className: "absolute inset-0 w-full h-full object-cover", width: 1920, height: 1080 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-overlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10 text-background", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-black mb-2", children: t.toursPage.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background/85 max-w-2xl", children: t.toursPage.sub })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat("all"), className: `px-5 py-2 rounded-lg text-sm font-bold transition-all ${cat === "all" ? "gradient-hero text-primary-foreground shadow-gold" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`, children: t.toursPage.all }),
          tourCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(c.key), className: `px-5 py-2 rounded-lg text-sm font-bold transition-all ${cat === c.key ? "gradient-hero text-primary-foreground shadow-gold" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`, children: locale === "ar" ? c.ar : c.en }, c.key))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((tr) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-gold hover:-translate-y-1 transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tr.image, alt: locale === "ar" ? tr.nameAr : tr.nameEn, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 end-3 px-3 py-1 rounded-lg bg-foreground/80 backdrop-blur text-primary text-xs font-bold", children: locale === "ar" ? tourCategories.find((c) => c.key === tr.category)?.ar : tourCategories.find((c) => c.key === tr.category)?.en })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-black text-lg mb-2", children: locale === "ar" ? tr.nameAr : tr.nameEn }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4 leading-relaxed", children: locale === "ar" ? tr.descAr : tr.descEn }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
              " ",
              locale === "ar" ? tr.duration : tr.durationEn
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between pt-4 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: t.toursPage.from }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-black text-gradient-gold", children: [
                  "$",
                  tr.price
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs", children: [
                  " / ",
                  t.toursPage.perPerson
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "px-4 py-2 rounded-lg gradient-hero text-primary-foreground text-sm font-bold shadow-gold hover:opacity-90 inline-flex items-center gap-1", children: [
                t.toursPage.book,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: `w-3.5 h-3.5 ${locale === "en" ? "rotate-180" : ""}` })
              ] })
            ] })
          ] })
        ] }, tr.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ToursPage as component
};
