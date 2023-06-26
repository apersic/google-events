import * as S from "./LoadingDots.styles";

export interface DotProps {
  delay?: number;
}

const Dot = ({ delay }: DotProps) => {
  return (
    <S.Dot>
      <S.OuterDot delay={delay}></S.OuterDot>
      <S.InnerDot />
    </S.Dot>
  );
};

export default Dot;
