import LoadingDots from "../LoadingDots/LoadingDots";
import * as S from "./LoadingComponent.styles";

export interface LoadingComponentProps {
  text: string;
  isFixed?: boolean;
}

const LoadingComponent = ({ text, isFixed = false }: LoadingComponentProps) => {
  return (
    <S.LoadingComponent>
      <LoadingDots isFixed={isFixed} />
      <S.LoadingText>{text}</S.LoadingText>
    </S.LoadingComponent>
  );
};

export default LoadingComponent;
