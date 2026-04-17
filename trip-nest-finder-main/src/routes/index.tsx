import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Car, Map, Smartphone, Clock, Shield, Award, Wrench, ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useI18n } from "@/i18n/I18nProvider";
import { tourCategories } from "@/data/mock";
import heroPyramids from "@/assets/hero-pyramids.jpg";
import heroLimo from "@/assets/hero-limousine.jpg";
import serviceTransfer from "@/assets/service-transfer.jpg";
import serviceTours from "@/assets/service-tours.jpg";
import serviceSim from "@/assets/service-sim.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxor Taxis — Marsa Alam Transfers & Tours" },
      { name: "description", content: "Premium taxi transfers, Egypt tours and SIM cards in Marsa Alam." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t, locale } = useI18n();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero 1 — Pyramids */}
        <section className="relative h-[80vh] min-h-[520px] overflow-hidden">
          <img src={heroPyramids} alt="Pyramids" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 gradient-overlay" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-end pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-background"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur text-primary text-sm font-bold border border-primary/40 mb-5">
                ★ ON TIME 24/7
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-5 text-background">
                {t.hero.welcome}
              </h1>
              <p className="text-lg md:text-xl text-background/85 mb-8 leading-relaxed max-w-2xl">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/transfers" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gradient-hero text-primary-foreground font-bold shadow-gold hover:scale-[1.02] transition-transform">
                  <Car className="w-5 h-5" /> {t.hero.cta1}
                </Link>
                <Link to="/tours" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-background/15 backdrop-blur text-background font-bold border border-background/30 hover:bg-background/25 transition-colors">
                  <Map className="w-5 h-5" /> {t.hero.cta2}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero 2 — Limousine band */}
        <section className="relative overflow-hidden bg-foreground text-background">
          <div className="grid md:grid-cols-2 items-center">
            <img src={heroLimo} alt="Limousine" loading="lazy" className="w-full h-72 md:h-[420px] object-cover" width={1920} height={1080} />
            <div className="p-8 md:p-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 text-primary">{t.hero.hero2Title}</h2>
              <p className="text-lg text-background/80 leading-relaxed">{t.hero.hero2Sub}</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-3">{t.services.title}</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: serviceTransfer, title: t.services.transferTitle, desc: t.services.transferDesc, cta: t.services.transferCta, to: "/transfers" as const },
              { img: serviceTours, title: t.services.toursTitle, desc: t.services.toursDesc, cta: t.services.toursCta, to: "/tours" as const },
             { img: serviceSim, title: t.services.simTitle, desc: t.services.simDesc, cta: t.services.simCta, to: "/sim-cards" as const },
            ].map((s) => (
              <article key={s.title} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                <div className="h-56 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{s.desc}</p>
                  <Link to={s.to} className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-3 transition-all">
                    {s.cta} <ArrowLeft className={`w-4 h-4 ${locale === "en" ? "rotate-180" : ""}`} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Tour types */}
        <section className="bg-secondary/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-3">{t.tourTypes.title}</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tourCategories.map((cat) => (
                <Link
                  key={cat.key}
                  to="/tours"
                  search={{ category: cat.key }}
                  className="group relative rounded-2xl overflow-hidden h-64 shadow-card hover:shadow-gold transition-all duration-300"
                >
                  <img src={cat.image} alt={locale === "ar" ? cat.ar : cat.en} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-background">
                    <h3 className="text-xl font-black">{locale === "ar" ? cat.ar : cat.en}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-3">{t.why.title}</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Clock, t: t.why.f1, d: t.why.f1d },
              { icon: Shield, t: t.why.f2, d: t.why.f2d },
              { icon: Award, t: t.why.f3, d: t.why.f3d },
              { icon: Wrench, t: t.why.f4, d: t.why.f4d },
            ].map((f) => (
              <div key={f.t} className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary transition-colors">
                <div className="w-14 h-14 rounded-xl gradient-hero grid place-items-center text-primary-foreground mx-auto mb-4 shadow-gold">
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="font-black mb-1">{f.t}</h3>
                <p className="text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="rounded-3xl gradient-dark p-10 md:p-16 text-center text-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${heroPyramids})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-black mb-3 text-primary">{t.cta.title}</h2>
              <p className="text-background/80 mb-7 max-w-xl mx-auto">{t.cta.sub}</p>
              <Link to="/contact" className="inline-block px-8 py-3.5 rounded-xl gradient-hero text-primary-foreground font-bold shadow-gold hover:scale-105 transition-transform">
                {t.cta.btn}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
