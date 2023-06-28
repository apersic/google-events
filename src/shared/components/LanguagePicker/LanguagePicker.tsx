import { changeLanguage } from "i18next";
import { AvailableLanguages } from "../../../store/types";
import * as S from "./LanguagePicker.styles";
import { getLanguage } from "../../localisation/i18n-utils";
import { useTranslation } from "react-i18next";

export const LanguagePicker = () => {
  const language = getLanguage();
  const { t } = useTranslation();

  const handleOnDaysLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(event.target.value);
  };

  return (
    <S.LanguagePicker value={language} onChange={handleOnDaysLimitChange}>
      <option value={AvailableLanguages.EN}>{t("english")}</option>
      <option value={AvailableLanguages.HR}>{t("croatian")}</option>
    </S.LanguagePicker>
  );
};
