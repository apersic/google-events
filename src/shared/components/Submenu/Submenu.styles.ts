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
  right: 0;
  width: 220px;
  border: ${colors.navBarBorder};
  border-top: 0;
  border-right: 0;
  border-radius: 0 0 0 4px;
  padding: 8px;
  background: ${colors.white};

  ${responsive.phone} {
    right: 0;
    left: 0;
    width: unset;
    border-left: 0;
    border-radius: unset;
  }
`;

export const MenuItem = styled.button`
  border: 0;
  background: ${colors.transparent};
  color: ${colors.primary};
  padding: 0;
  cursor: pointer;
  padding: 12px;
  width: 100%;
  text-align: right;
  transition: all 0.4s ease-in-out;
  box-sizing: border-box;
  margin-bottom: 12px;
  border-bottom: ${colors.listItemBorder};

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
  }
`;
