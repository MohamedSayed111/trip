import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Luxor Taxis" },
      { name: "description", content: "Reach out to Luxor Taxis 24/7." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full">
        <h1 className="text-4xl md:text-5xl font-black mb-2">{t.contact.title}</h1>
        <p className="text-muted-foreground mb-10">{t.contact.sub}</p>

        <div className="grid md:grid-cols-[1fr_340px] gap-8">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card border border-border rounded-2xl p-7 shadow-card space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder={t.contact.name} className="px-4 py-3 rounded-xl bg-secondary outline-none focus:ring-2 focus:ring-primary" />
              <input required type="email" placeholder={t.contact.email} className="px-4 py-3 rounded-xl bg-secondary outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <input placeholder={t.contact.phone} className="w-full px-4 py-3 rounded-xl bg-secondary outline-none focus:ring-2 focus:ring-primary" />
            <textarea required placeholder={t.contact.message} rows={6} className="w-full px-4 py-3 rounded-xl bg-secondary outline-none focus:ring-2 focus:ring-primary resize-none" />
            <button type="submit" className="px-7 py-3 rounded-xl gradient-hero text-primary-foreground font-bold shadow-gold hover:opacity-90 transition-opacity">
              {t.contact.send}
            </button>
            {sent && <p className="text-primary font-bold">✓ {t.contact.send} ✓</p>}
          </form>

          <aside className="space-y-3">
            {[
              { icon: Phone, label: "+201117787541", title: t.contact.callUs },
              { icon: MessageCircle, label: "+20 1117787541", title: t.contact.whatsapp },
              { icon: Mail, label: "info@luxortaxis.eg", title: t.contact.emailUs },
              { icon: MapPin, label: t.contact.address, title: t.contact.address },
            ].map((c) => (
              <div key={c.title} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors">
                <span className="w-11 h-11 rounded-lg gradient-hero grid place-items-center text-primary-foreground shadow-gold">
                  <c.icon className="w-5 h-5" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">{c.title}</div>
                  <div className="text-sm font-bold">{c.label}</div>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
