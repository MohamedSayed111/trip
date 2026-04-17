import { Link, useNavigate } from "@tanstack/react-router";
import { Phone, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import logo from "@/assets/logo.png";

export function Header() {
  const { t, locale, toggle } = useI18n();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/transfers", label: t.nav.transfers },
    { to: "/tours", label: t.nav.tours },
    //{ to: "/sim-cards", label: t.nav.sim },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/85 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 font-bold">
          <img src={logo} alt={t.brand} className="w-12 h-12 rounded-full bg-primary p-1 shadow-gold" width={48} height={48} />
          <div className="leading-tight hidden sm:block">
            <div className="text-base font-black">{t.brand}</div>
            <div className="text-[11px] text-muted-foreground">ON TIME 24/7</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors"
              activeProps={{ className: "px-3 py-2 rounded-lg text-sm font-bold text-primary-foreground bg-foreground" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Switch language"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold border border-border hover:bg-secondary transition-colors"
          >
            <Globe className="w-4 h-4" />
            {locale === "ar" ? "EN" : "ع"}
          </button>
          <button
            onClick={() => navigate({ to: "/contact" })}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-hero text-primary-foreground text-sm font-bold shadow-gold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            {t.contact.callUs}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary"
                activeProps={{ className: "px-3 py-2.5 rounded-lg text-sm font-bold bg-foreground text-primary-foreground" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => { toggle(); setOpen(false); }}
              className="mt-2 px-3 py-2.5 rounded-lg text-sm font-semibold border border-border text-start"
            >
              {locale === "ar" ? "English" : "العربية"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
