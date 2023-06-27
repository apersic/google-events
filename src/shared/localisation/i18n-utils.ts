import i18next from "i18next";
import { AvailableLanguages } from "../../store/types";

export const changeLanguage = (language: AvailableLanguages) => {
  if (i18next.isInitialized) {
    i18next.changeLanguage(language);
  }
};

export const getLanguage = () => {
  if (i18next.isInitialized) {
    return i18next.language;
  }

  return "";
};
