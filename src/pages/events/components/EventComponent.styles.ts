import styled from "styled-components";
import { colors } from "../../../shared/styles/base/colors";
import { responsive } from "../../../shared/styles/utils/responsive";
import { fonts } from "../../../shared/styles/base/fonts";

export const EventComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 720px;
  background: ${colors.cardBackground};
  border: ${colors.listItemBorder};
  border-radius: 4px;
  padding: 12px 16px;
  gap: 12px;
  box-shadow: ${colors.cardBoxShadow};
  background: ${colors.white};

  ${responsive.tablet_portrait} {
    width: 100%;
  }

  ${responsive.phone} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DateTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

export const EventDates = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;

  ${responsive.phone} {
    gap: 8px;
  }
`;

export const EventSummary = styled.span`
  font-size: ${fonts.eventSummary.fontSize};
  line-height: ${fonts.eventSummary.lineHeight};
  text-align: left;
`;

export const DateText = styled.span`
  font-size: ${fonts.text.fontSize};
  line-height: ${fonts.text.lineHeight};
  text-align: left;
  white-space: nowrap;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 0;
  background: transparent;
  width: 20px;
  height: 20px;
  padding: 0;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    path {
      fill: ${colors.primary};
    }
  }
`;

export const EventDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  ${responsive.phone} {
    width: 100%;
    justify-content: space-between;
  }
`;
