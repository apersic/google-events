import * as S from "./DeletePopup.styles";
import { useTranslation } from "react-i18next";

interface DeletePopupProps {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const DeletePopup = ({ title, onCancel, onConfirm }: DeletePopupProps) => {
  const handleOnConfirmClick = () => {
    onConfirm();
    onCancel();
  };
  const { t } = useTranslation();

  return (
    <S.DeletePopup>
      <S.Title>{title}</S.Title>
      <S.ButtonGroup>
        <S.CancelButton onClick={onCancel}>{t("cancel")}</S.CancelButton>
        <S.ConfrimButton onClick={handleOnConfirmClick}>{t("yes")}</S.ConfrimButton>
      </S.ButtonGroup>
    </S.DeletePopup>
  );
};
