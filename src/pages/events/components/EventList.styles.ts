import styled from "styled-components";
import { fonts } from "../../../shared/styles/base/fonts";
import { responsive } from "../../../shared/styles/utils/responsive";
import { colors } from "../../../shared/styles/base/colors";

export const EventList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 24px;

  ${responsive.tablet_portrait} {
    width: 100%;
  }
`;

export const EventGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;

  ${responsive.tablet_portrait} {
    width: 100%;
  }
`;

export const GroupName = styled.span`
  font-size: ${fonts.eventSummary.fontSize};
  line-height: ${fonts.eventSummary.lineHeight};
  text-align: left;
  font-weight: bold;
`;

export const FilterSelect = styled.select`
  padding: 12px;
  border-radius: 4px;
  border: ${colors.listItemBorder};
  font-size: ${fonts.eventSummary.fontSize};
  line-height: ${fonts.eventSummary.lineHeight};
  box-shadow: ${colors.cardBoxShadow};
`;

export const NoResults = styled.span`
  font-size: ${fonts.eventSummary.fontSize};
  line-height: ${fonts.eventSummary.lineHeight};
`;
