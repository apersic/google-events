import * as S from "./FloatingButton.styles";

interface FloatingButtonProps {
  label: string;
  onClick: () => void;
}

export const FloatingButton = ({ label, onClick }: FloatingButtonProps) => {
  return <S.FloatingButton onClick={onClick}>{label}</S.FloatingButton>;
};
