import styled from "styled-components";
import { colors } from "../../../shared/styles/base/colors";
import { responsive } from "../../../shared/styles/utils/responsive";

export const EventComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 720px;
  background: ${colors.cardBackground};
  border: ${colors.listItemBorder};
  border-radius: 4px;
  padding: 12px 24px;

  ${responsive.tablet_portrait} {
    width: 100%;
  }
`;

export const EventDates = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
`;
