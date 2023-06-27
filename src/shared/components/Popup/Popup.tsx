import { ReactElement } from "react";
import * as S from "./Popup.styles";

interface PopupProps {
  content: ReactElement;
  onClose: () => void;
}

export const Popup = ({ content }: PopupProps) => {
  return <S.PopupWrapper>{content}</S.PopupWrapper>;
};
