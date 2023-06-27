import styled from "styled-components";
import { fonts } from "../../styles/base/fonts";
import { responsive } from "../../styles/utils/responsive";
import { colors } from "../../styles/base/colors";

export const FloatingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fonts.title.fontSize};
  line-height: ${fonts.title.lineHeight};
  font-weight: bold;
  position: fixed;
  right: 52px;
  bottom: 32px;
  z-index: 2;
  border: 0;
  background: ${colors.primary};
  color: ${colors.white};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  box-shadow: ${colors.cardBoxShadow};

  ${responsive.tablet_portrait} {
    right: 24px;
  }
`;
