import Dot from "./Dot";
import * as S from "./LoadingDots.styles";

export interface LoadingDotsProps {
  isFixed?: boolean;
}

const LoadingDots = ({ isFixed = false }: LoadingDotsProps) => {
  return (
    <S.LoadingDots isFixed={isFixed}>
      <Dot delay={-0.32} />
      <Dot delay={-0.16} />
      <Dot />
    </S.LoadingDots>
  );
};

export default LoadingDots;
