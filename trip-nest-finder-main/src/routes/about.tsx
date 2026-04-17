import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/i18n/I18nProvider";
import heroLimo from "@/assets/hero-limousine.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Luxor Taxis" },
      { name: "description", content: "About Luxor Taxis Marsa Alam." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-72 overflow-hidden">
          <img src={heroLimo} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 gradient-overlay" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-end pb-10">
            <h1 className="text-4xl md:text-5xl font-black text-background">{t.about.title}</h1>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <p className="text-lg text-foreground/80 leading-relaxed mb-5">{t.about.p1}</p>
          <p className="text-lg text-foreground/80 leading-relaxed mb-12">{t.about.p2}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "+10", l: t.about.stats.years },
              { n: "+5K", l: t.about.stats.customers },
              { n: "+1000", l: t.about.stats.tours },
              { n: "+25", l: t.about.stats.cars },
            ].map((s) => (
              <div key={s.l} className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary transition-colors shadow-card">
                <div className="text-4xl font-black text-gradient-gold mb-1">{s.n}</div>
                <div className="text-sm text-muted-foreground font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
