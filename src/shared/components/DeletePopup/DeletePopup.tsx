import * as S from "./DeletePopup.styles";

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
