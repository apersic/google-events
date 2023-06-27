import styled from "styled-components";
import { colors } from "../../../shared/styles/base/colors";
import { fonts } from "../../../shared/styles/base/fonts";

export const AddEventPopup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: ${colors.white};
  padding: 12px 16px;
  gap: 24px;
  width: 100%;
  max-width: 520px;
`;

export const AddEventForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const Title = styled.span`
  font-size: ${fonts.eventSummary.fontSize};
  line-height: ${fonts.eventSummary.lineHeight};
  text-align: left;
  width: 100%;
`;

export const SubmitButton = styled.input`
  border: ${colors.listItemBorder};
  background: ${colors.primary};
  color: ${colors.white};
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
`;

interface ErrorTextProps {
  isError?: boolean;
}

export const ErrorText = styled.span<ErrorTextProps>`
  font-size: ${fonts.text.fontSize};
  line-height: ${fonts.text.lineHeight};
  color: ${colors.error};
  opacity: 0;

  ${(props) =>
    props.isError &&
    `
    opacity: 1
  `}
`;
