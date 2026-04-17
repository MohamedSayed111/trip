import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Locale, type Translation } from "./translations";

type I18nContextValue = {
  locale: Locale;
  t: Translation;
  setLocale: (l: Locale) => void;
  toggle: () => void;
  dir: "rtl" | "ltr";
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("locale")) as Locale | null;
    if (saved === "ar" || saved === "en") setLocaleState(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem("locale", locale);
    } catch {
      // ignore
    }
  }, [locale]);

  const value: I18nContextValue = {
    locale,
    t: translations[locale],
    setLocale: setLocaleState,
    toggle: () => setLocaleState((l) => (l === "ar" ? "en" : "ar")),
    dir: locale === "ar" ? "rtl" : "ltr",
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
