import { JSXElementConstructor, ReactElement } from "react";
import * as S from "./DeletePopup.styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface DeletePopupProps extends ReactElement<any, string | JSXElementConstructor<any>> {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const DeletePopup = ({ title, onCancel, onConfirm }: DeletePopupProps) => {
  const handleOnConfirmClick = () => {
    onConfirm();
    onCancel();
  };

  return (
    <S.DeletePopup>
      <S.Title>{title}</S.Title>
      <S.ButtonGroup>
        <S.CancelButton onClick={onCancel}>Cancel</S.CancelButton>
        <S.ConfrimButton onClick={handleOnConfirmClick}>Yes</S.ConfrimButton>
      </S.ButtonGroup>
    </S.DeletePopup>
  );
};
