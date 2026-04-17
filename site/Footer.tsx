import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/transfers", label: t.nav.transfers },
    { to: "/tours", label: t.nav.tours },
    { to: "/sim-cards", label: t.nav.sim },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <footer className="mt-24 gradient-dark text-background dark:text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-black text-2xl mb-3 text-primary">{t.brand}</h3>
          <p className="text-sm text-background/70 leading-relaxed">{t.footer.desc}</p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/15 text-primary text-xs font-bold border border-primary/30">
            <Clock className="w-3.5 h-3.5" /> ON TIME 24/7
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-primary">{t.footer.links}</h4>
          <ul className="space-y-2 text-sm text-background/70">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-primary">{t.footer.contact}</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +20 100 000 0000</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@nstaxis.eg</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {t.contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 py-4 text-center text-xs text-background/50">
        © {new Date().getFullYear()} {t.brand}. {t.footer.rights}.
      </div>
    </footer>
  );
}
