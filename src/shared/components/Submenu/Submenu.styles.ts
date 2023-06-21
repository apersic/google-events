import styled from "styled-components";
import { responsive } from "../../styles/utils/responsive";
import { colors } from "../../styles/base/colors";

export const Submenu = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

export const SubmenuWrapper = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  background: ${colors.transparent};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
  position: absolute;
  top: 72px;
  right: 16px;
  width: 120px;

  ${responsive.tablet_portrait} {
    right: 12px;
  }

  ${responsive.phone} {
    right: 0;
    left: 0;
    width: unset;
  }
`;

export const MenuItem = styled.button`
  border: 0;
  background: ${colors.transparent};
  padding: 0;
  cursor: pointer;
`;
