import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ArrowLeft } from "lucide-react";
import { useState, useMemo } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/i18n/I18nProvider";
import { tours, tourCategories, type TourCategory } from "@/data/mock";
import heroPyramids from "@/assets/hero-pyramids.jpg";

type Search = { category?: TourCategory };

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Egypt Tours — Luxor Taxis" },
      { name: "description", content: "Boat trips, safari, historical and shopping tours in Egypt." },
    ],
  }),
  validateSearch: (s: Record<string, unknown>): Search => {
    const c = s.category;
    if (c === "boat" || c === "safari" || c === "historical" || c === "shopping") return { category: c };
    return {};
  },
  component: ToursPage,
});

function ToursPage() {
  const { t, locale } = useI18n();
  const search = Route.useSearch();
  const [cat, setCat] = useState<TourCategory | "all">(search.category ?? "all");

  const filtered = useMemo(() => (cat === "all" ? tours : tours.filter((x) => x.category === cat)), [cat]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-72 overflow-hidden">
          <img src={heroPyramids} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 gradient-overlay" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-10 text-background">
            <h1 className="text-4xl md:text-5xl font-black mb-2">{t.toursPage.title}</h1>
            <p className="text-background/85 max-w-2xl">{t.toursPage.sub}</p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setCat("all")}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${cat === "all" ? "gradient-hero text-primary-foreground shadow-gold" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`}
            >
              {t.toursPage.all}
            </button>
            {tourCategories.map((c) => (
              <button
                key={c.key}
                onClick={() => setCat(c.key)}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${cat === c.key ? "gradient-hero text-primary-foreground shadow-gold" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`}
              >
                {locale === "ar" ? c.ar : c.en}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tr) => (
              <article key={tr.id} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-gold hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img src={tr.image} alt={locale === "ar" ? tr.nameAr : tr.nameEn} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-3 end-3 px-3 py-1 rounded-lg bg-foreground/80 backdrop-blur text-primary text-xs font-bold">
                    {locale === "ar" ? tourCategories.find((c) => c.key === tr.category)?.ar : tourCategories.find((c) => c.key === tr.category)?.en}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-lg mb-2">{locale === "ar" ? tr.nameAr : tr.nameEn}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{locale === "ar" ? tr.descAr : tr.descEn}</p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                    <Clock className="w-3.5 h-3.5" /> {locale === "ar" ? tr.duration : tr.durationEn}
                  </div>
                  <div className="flex items-end justify-between pt-4 border-t border-border">
                    <div>
                      <div className="text-[11px] text-muted-foreground">{t.toursPage.from}</div>
                      <span className="text-2xl font-black text-gradient-gold">${tr.price}</span>
                      <span className="text-muted-foreground text-xs"> / {t.toursPage.perPerson}</span>
                    </div>
                    <Link to="/contact" className="px-4 py-2 rounded-lg gradient-hero text-primary-foreground text-sm font-bold shadow-gold hover:opacity-90 inline-flex items-center gap-1">
                      {t.toursPage.book} <ArrowLeft className={`w-3.5 h-3.5 ${locale === "en" ? "rotate-180" : ""}`} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
