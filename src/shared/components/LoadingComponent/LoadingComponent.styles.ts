import styled from "styled-components";
import { colors } from "../../styles/base/colors";
import { fonts } from "../../styles/base/fonts";

export const LoadingComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LoadingText = styled.span<{ $color?: string }>`
  display: inline-block;
  margin-top: 18px;
  font-size: ${fonts.primaryButton.fontSize};
  line-height: ${fonts.primaryButton.lineHeight};
  color: ${colors.loadingComponent};
`;
