import styled from "styled-components";
import { colors } from "../../styles/base/colors";
import { responsive } from "../../styles/utils/responsive";
import { fonts } from "../../styles/base/fonts";

export const Button = styled.button`
  border-radius: 4px;
  border: 0;
  color: ${colors.white};
  background-color: ${colors.primary};
  padding: 14px 24px;
  font-weight: ${fonts.fontWeightBold};
  font-size: ${fonts.primaryButton.fontSize};
  line-height: ${fonts.primaryButton.lineHeight};
  text-transform: "none";
  min-width: 220px;
  cursor: pointer;

  ${responsive.phone} {
    width: 100%;
    min-width: unset;
    white-space: nowrap;
  }
`;
