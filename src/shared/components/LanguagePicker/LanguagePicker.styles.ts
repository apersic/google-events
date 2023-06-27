import styled from "styled-components";
import { colors } from "../../styles/base/colors";
import { fonts } from "../../styles/base/fonts";
import { responsive } from "../../styles/utils/responsive";

export const LanguagePicker = styled.select`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 4px;
  border: ${colors.listItemBorder};
  font-size: ${fonts.eventSummary.fontSize};
  line-height: ${fonts.eventSummary.lineHeight};

  ${responsive.tablet_portrait} {
    font-size: ${fonts.title.fontSizeMobile};
  }
`;
