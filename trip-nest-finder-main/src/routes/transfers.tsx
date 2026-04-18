import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroPyramids from "@/assets/hero-pyramids.jpg";
import { useState, useRef, useEffect } from "react";

export const Route = createFileRoute("/transfers")({
  component: TransfersPage,
});

const cityPrices: Record<string, number> = {
  "Marsa Alam": 0,
  Hurghada: 120,
  Luxor: 200,
};

const vehicleMultiplier: Record<string, number> = {
  Economy: 1,
  SUV: 1.4,
  Van: 1.8,
};

function TransfersPage() {
  const [open, setOpen] = useState(true);

  const nameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        nameRef.current?.focus();
      }, 100);
    }
  }, [open]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    fromCity: "",
    toCity: "",
    vehicle: "",
    date: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isFormValid =
    form.name &&
    form.phone &&
    form.fromCity &&
    form.toCity &&
    form.vehicle &&
    form.date &&
    form.time;

  const basePrice =
    form.fromCity && form.toCity
      ? Math.abs(cityPrices[form.fromCity] - cityPrices[form.toCity]) || 50
      : 0;

  const finalPrice =
    basePrice *
    (vehicleMultiplier[form.vehicle as keyof typeof vehicleMultiplier] || 1);

  const handleSubmit = (e: React.FormEvent) => {
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

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">

        {/* HERO */}
        <section className="relative h-80 md:h-96 overflow-hidden">
          <img
            src={heroPyramids}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative h-full flex items-center justify-center text-white">
            <h1 className="text-4xl md:text-5xl font-black">
              Airport Transfers 🚖
            </h1>
          </div>
        </section>

        {/* FLOAT BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg font-bold z-50"
        >
          Book Now 🚖
        </button>

        {/* FORM */}
        {open && (
          <section className="max-w-2xl mx-auto px-4 py-12">
            <div className="bg-card border rounded-2xl p-6 shadow-card">

              <h2 className="text-2xl font-bold mb-6 text-center">
                Book Your Transfer
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* NAME (FOCUSED) */}
                <input
                  ref={nameRef}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg"
                  required
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-lg"
                  required
                />

                <select
                  name="fromCity"
                  value={form.fromCity}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="">From City</option>
                  {Object.keys(cityPrices).map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </select>

                <select
                  name="toCity"
                  value={form.toCity}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="">To City</option>
                  {Object.keys(cityPrices).map((city) => (
                    <option key={city}>{city}</option>
                  ))}
                </select>

                <select
                  name="vehicle"
                  value={form.vehicle}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="">Vehicle</option>
                  <option>Economy</option>
                  <option>SUV</option>
                  <option>Van</option>
                </select>

                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                />

                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg"
                />

                <div className="text-center font-bold text-lg">
                  💰 ${finalPrice.toFixed(2)}
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-3 rounded-lg font-bold text-white ${
                    isFormValid ? "bg-green-500" : "bg-gray-400"
                  }`}
                >
                  Send via WhatsApp
                </button>

              </form>
            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}