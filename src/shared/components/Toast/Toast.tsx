import * as S from "./Toast.styles";

export interface ToastProps {
  message: string;
}

const Toast = ({ message }: ToastProps) => {
  return <S.Toast>{message}</S.Toast>;
};

export default Toast;
