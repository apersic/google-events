import { initReactI18next } from "react-i18next";
import { AvailableLanguages } from "../../store/types";
import languages from "./index";
import i18next from "i18next";

export const initI18n = () => {
  i18next.use(initReactI18next).init({
    lng: AvailableLanguages.EN,
    debug: true,
    resources: languages,
    fallbackLng: "default",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
};
