import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Star } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/i18n/I18nProvider";
import { simPlans } from "@/data/mock";
import heroPyramids from "@/assets/hero-pyramids.jpg";

export const Route = createFileRoute("/sim-cards")({
  head: () => ({
    meta: [
      { title: "SIM Cards — Luxor Taxis" },
      { name: "description", content: "Tourist SIM card plans for Egypt." },
    ],
  }),
  component: SimPage,
});

function SimPage() {
  const { t, locale } = useI18n();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-72 overflow-hidden">
          <img src={heroPyramids} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 gradient-overlay" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10 text-background">
            <h1 className="text-4xl md:text-5xl font-black mb-2">{t.simPage.title}</h1>
            <p className="text-background/85 max-w-2xl">{t.simPage.sub}</p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {simPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-7 border-2 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "border-primary bg-card shadow-gold scale-[1.02]"
                    : "border-border bg-card shadow-card hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 start-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full gradient-hero text-primary-foreground text-xs font-black shadow-gold">
                    <Star className="w-3 h-3 fill-current" /> {locale === "ar" ? "الأكثر مبيعاً" : "Best Seller"}
                  </span>
                )}
                <h3 className="font-black text-xl mb-1">{locale === "ar" ? plan.nameAr : plan.nameEn}</h3>
                <div className="text-sm text-muted-foreground mb-5">{t.simPage.validity}: {locale === "ar" ? plan.validityAr : plan.validityEn}</div>
                <div className="mb-6">
                  <span className="text-5xl font-black text-gradient-gold">${plan.price}</span>
                </div>
                <div className="mb-6 p-4 rounded-xl bg-secondary/60 text-center">
                  <div className="text-xs text-muted-foreground mb-1">{t.simPage.data}</div>
                  <div className="text-2xl font-black">{plan.data}</div>
                </div>
                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-5 h-5 rounded-full bg-primary/20 text-primary grid place-items-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      {locale === "ar" ? f.ar : f.en}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center px-5 py-3 rounded-xl font-bold transition-all ${
                    plan.popular
                      ? "gradient-hero text-primary-foreground shadow-gold hover:scale-[1.02]"
                      : "bg-foreground text-background hover:bg-foreground/85"
                  }`}
                >
                  {t.simPage.buy}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
