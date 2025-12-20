'use client'
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const locale = useLocale();

  const language: { code: string; label: string }[] = [
    {
      code: "en",
      label: "EN",
    },
    {
      code: "fr",
      label: "FR",
    }
  ]

  const selectedLanguage: string = language.find(
    (lang) => lang.code === locale)?.code || "en";

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg glass">
      <Link href="/" locale="en" passHref>
        <button
          className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${selectedLanguage === "en" ?
            "text-primary-foreground" :
            "text-muted-foreground hover:text-foreground"}`
          }
        >
          {selectedLanguage === "en" && (
            <motion.div
              layoutId="lang-indicator"
              className="absolute inset-0 gradient-bg rounded-md"
              transition={{ type: "spring", duration: 0.3 }}
            />
          )}
          <span className="relative z-10">EN</span>
        </button>
      </Link>
      <Link href="/" locale="fr" passHref>
        <button
          className={
            `relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${selectedLanguage === "fr" ?
              "text-primary-foreground" :
              "text-muted-foreground hover:text-foreground"
            }`}
        >
          {selectedLanguage === "fr" && (
            <motion.div
              layoutId="lang-indicator"
              className="absolute inset-0 gradient-bg rounded-md"
              transition={{ type: "spring", duration: 0.3 }}
            />
          )}
          <span className="relative z-10">FR</span>
        </button>
      </Link>
    </div >
  );
};

export default LanguageSwitcher;
