import * as S from "./LoadingDots.styles";

export interface DotProps {
  delay?: number;
  isFixed?: boolean;
}

const Dot = ({ delay, isFixed = false }: DotProps) => {
  return (
    <S.Dot>
      <S.OuterDot delay={delay} isFixed={isFixed}></S.OuterDot>
      <S.InnerDot />
    </S.Dot>
  );
};

export default Dot;
