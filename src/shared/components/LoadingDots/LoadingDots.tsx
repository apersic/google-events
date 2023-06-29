import Dot from "./Dot";
import * as S from "./LoadingDots.styles";

export interface LoadingDotsProps {
  isFixed?: boolean;
}

const LoadingDots = ({ isFixed = false }: LoadingDotsProps) => {
  return (
    <S.LoadingDots isFixed={isFixed}>
      <Dot isFixed={isFixed} delay={-0.32} />
      <Dot isFixed={isFixed} delay={-0.16} />
      <Dot isFixed={isFixed} />
    </S.LoadingDots>
  );
};

export default LoadingDots;
