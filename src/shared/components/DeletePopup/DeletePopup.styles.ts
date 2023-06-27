import styled from "styled-components";
import { colors } from "../../styles/base/colors";
import { fonts } from "../../styles/base/fonts";

export const DeletePopup = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: ${colors.white};
  padding: 12px 16px;
  gap: 24px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
`;

export const Title = styled.span`
  font-size: ${fonts.eventSummary.fontSize};
  line-height: ${fonts.eventSummary.lineHeight};
  text-align: left;
`;

export const ConfrimButton = styled.button`
  border: ${colors.listItemBorder};
  background: ${colors.primary};
  color: ${colors.white};
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  border: ${colors.listItemBorder};
  background: ${colors.white};
  color: ${colors.primary};
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
`;
