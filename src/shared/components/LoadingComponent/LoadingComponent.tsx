import LoadingDots from "../LoadingDots/LoadingDots";
import * as S from "./LoadingComponent.styles";

export interface LoadingComponentProps {
  text: string;
}

const LoadingComponent = ({ text }: LoadingComponentProps) => {
  return (
    <S.LoadingComponent>
      <LoadingDots />
      <S.LoadingText>{text}</S.LoadingText>
    </S.LoadingComponent>
  );
};

export default LoadingComponent;
