import styled from "styled-components";
import { colors } from "../../styles/base/colors";
import { fonts } from "../../styles/base/fonts";

export const LanguagePicker = styled.select`
  padding: 12px;
  border-radius: 4px;
  border: ${colors.listItemBorder};
  font-size: ${fonts.eventSummary.fontSize};
  line-height: ${fonts.eventSummary.lineHeight};
`;
