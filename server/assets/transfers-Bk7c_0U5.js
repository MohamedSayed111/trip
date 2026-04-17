import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-9FBlegrf.js";
import { H as Header, F as Footer } from "./Footer-DwyT1Pjk.js";
import { h as heroPyramids } from "./hero-pyramids-Cev68d-n.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-PI378_YA.js";
const cityPrices = {
  "Marsa Alam": 0,
  Hurghada: 120,
  Luxor: 200
};
const vehicleMultiplier = {
  Economy: 1,
  SUV: 1.4,
  Van: 1.8
};
function TransfersPage() {
  const [open, setOpen] = reactExports.useState(true);
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    fromCity: "",
    toCity: "",
    vehicle: "",
    date: "",
    time: ""
  });
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const isFormValid = form.name && form.phone && form.fromCity && form.toCity && form.vehicle && form.date && form.time;
  const basePrice = form.fromCity && form.toCity ? Math.abs(cityPrices[form.fromCity] - cityPrices[form.toCity]) || 50 : 0;
  const finalPrice = basePrice * (vehicleMultiplier[form.vehicle] || 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    const message = `
🚖 Transfer Booking
👤 Name: ${form.name}
📞 Phone: ${form.phone}

📍 From: ${form.fromCity}
🎯 To: ${form.toCity}
🚗 Vehicle: ${form.vehicle}

📅 Date: ${form.date}
⏰ Time: ${form.time}

💰 Price: $${finalPrice.toFixed(2)}
`;
    const phoneNumber = "201117787541";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-80 md:h-96 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroPyramids, className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full flex items-center justify-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-black", children: "Airport Transfers 🚖" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(!open), className: "fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg font-bold z-50", children: "Book Now 🚖" }),
      open && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-2xl mx-auto px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border rounded-2xl p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "Book Your Transfer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "name", value: form.name, onChange: handleChange, className: "w-full p-3 border rounded-lg mt-1", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Phone Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "phone", value: form.phone, onChange: handleChange, className: "w-full p-3 border rounded-lg mt-1", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "From City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "fromCity", value: form.fromCity, onChange: handleChange, className: "w-full p-3 border rounded-lg mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select From City" }),
              Object.keys(cityPrices).map((city) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: city, children: city }, city))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "To City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "toCity", value: form.toCity, onChange: handleChange, className: "w-full p-3 border rounded-lg mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select To City" }),
              Object.keys(cityPrices).map((city) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: city, children: city }, city))
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Vehicle Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "vehicle", value: form.vehicle, onChange: handleChange, className: "w-full p-3 border rounded-lg mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Select Vehicle" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Economy", children: "Economy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SUV", children: "SUV" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Van", children: "Van" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "date", type: "date", value: form.date, onChange: handleChange, className: "w-full p-3 border rounded-lg mt-1", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "time", type: "time", value: form.time, onChange: handleChange, className: "w-full p-3 border rounded-lg mt-1", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center font-bold text-lg", children: [
            "💰 Estimated Price: $",
            finalPrice.toFixed(2)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: !isFormValid, className: `w-full py-3 font-bold rounded-lg text-white transition ${isFormValid ? "bg-green-500 hover:opacity-90" : "bg-gray-400 cursor-not-allowed"}`, children: "Send via WhatsApp" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  TransfersPage as component
};
