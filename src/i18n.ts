import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
type Languaje = { name: string; code: string };
const languages: Languaje[] = [
  { name: "English", code: "en" },
  { name: "Spanish", code: "es" },
];
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          switchLang: "Switch to Spanish",
          currentLang: "Language: English",
        },
      },
      es: {
        translation: {
          welcome: "Bienvenido",
          switchLang: "Cambiar a inglés",
          currentLang: "Idioma: Español",
        },
      },
    },
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  });

export default i18n;
export { languages };
