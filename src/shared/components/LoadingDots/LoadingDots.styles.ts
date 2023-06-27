import styled, { css, keyframes } from "styled-components";
import { colors } from "../../styles/base/colors";

const LoadingAnimation = keyframes`
  0% { opacity: 0 }
  50% { opacity: 1 }
  100% { opacity: 0 }
`;

interface LoadingDotsProps {
  isFixed?: boolean;
}

export const LoadingDots = styled.div<LoadingDotsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  ${(props) =>
    props.isFixed &&
    css`
      position: absolute;
      bottom: 76px;
    `}
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  position: relative;
`;

interface OuterDotProps {
  delay?: number;
}

export const OuterDot = styled.div<OuterDotProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid;
  border-color: ${colors.loadingComponent};
  position: absolute;
  left: 0;
  top: 0;
  animation: ${LoadingAnimation} 1.6s linear infinite;
  opacity: 0;

  ${(props) => {
    if (props.delay) {
      return css`
        animation-delay: ${props.delay}s;
      `;
    }

    return css`
      animation-delay: 0s;
    `;
  }};
`;

export const InnerDot = styled.div`
  width: 4px;
  height: 4px;
  background: ${colors.loadingComponent};
  border-radius: 50%;
  position: absolute;
  top: 25%;
  left: 25%;
`;
