import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-9FBlegrf.js";
import { c as createLucideIcon, H as Header, P as Phone, M as Mail, a as MapPin, F as Footer } from "./Footer-DwyT1Pjk.js";
import { u as useI18n } from "./router-PI378_YA.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode);
function ContactPage() {
  const {
    t
  } = useI18n();
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-black mb-2", children: t.contact.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-10", children: t.contact.sub }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1fr_340px] gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          setSent(true);
        }, className: "bg-card border border-border rounded-2xl p-7 shadow-card space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: t.contact.name, className: "px-4 py-3 rounded-xl bg-secondary outline-none focus:ring-2 focus:ring-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: t.contact.email, className: "px-4 py-3 rounded-xl bg-secondary outline-none focus:ring-2 focus:ring-primary" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: t.contact.phone, className: "w-full px-4 py-3 rounded-xl bg-secondary outline-none focus:ring-2 focus:ring-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, placeholder: t.contact.message, rows: 6, className: "w-full px-4 py-3 rounded-xl bg-secondary outline-none focus:ring-2 focus:ring-primary resize-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "px-7 py-3 rounded-xl gradient-hero text-primary-foreground font-bold shadow-gold hover:opacity-90 transition-opacity", children: t.contact.send }),
          sent && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary font-bold", children: [
            "✓ ",
            t.contact.send,
            " ✓"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "space-y-3", children: [{
          icon: Phone,
          label: "+201117787541",
          title: t.contact.callUs
        }, {
          icon: MessageCircle,
          label: "+20 1117787541",
          title: t.contact.whatsapp
        }, {
          icon: Mail,
          label: "info@luxortaxis.eg",
          title: t.contact.emailUs
        }, {
          icon: MapPin,
          label: t.contact.address,
          title: t.contact.address
        }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-11 h-11 rounded-lg gradient-hero grid place-items-center text-primary-foreground shadow-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold", children: c.label })
          ] })
        ] }, c.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ContactPage as component
};
