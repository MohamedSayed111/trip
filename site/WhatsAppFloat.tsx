import { useNavigate } from "@tanstack/react-router";

export function WhatsAppFloat() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate({ to: "/transfers" })}
      className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg font-bold z-50 hover:opacity-90 transition"
    >
      Book Now 🚖
    </button>
  );
}