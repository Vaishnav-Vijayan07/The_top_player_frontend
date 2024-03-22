import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import dataEN from "@/components/Data/locale/En.json";
import dataAR from "@/components/Data/locale/Ar.json";

const resources = {
  en: {
    translation: dataEN,
  },
  ar: {
    translation: dataAR,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
