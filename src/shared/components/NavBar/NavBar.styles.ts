import styled from "styled-components";
import { fonts } from "../../styles/base/fonts";
import { responsive } from "../../styles/utils/responsive";
import { colors } from "../../styles/base/colors";

export const NavBar = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  position: relative;
  border-bottom: ${colors.navBarBorder};
  box-shadow: ${colors.navBarBoxShadow};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background: ${colors.white};
  z-index: 2;

  ${responsive.tablet_portrait} {
    padding: 0 12px;
  }
`;

export const AppName = styled.span`
  display: inline-block;
  font-size: ${fonts.title.fontSize};
  line-height: ${fonts.title.lineHeight};
  font-weight: ${fonts.fontWeightBold};
  color: ${colors.primary};

  ${responsive.tablet_portrait} {
    font-size: ${fonts.title.fontSizeMobile};
  }
`;

export const UserName = styled.span`
  display: inline-block;
  font-size: ${fonts.text.fontSize};
  line-height: ${fonts.text.lineHeight};
`;

export const Email = styled.span`
  display: inline-block;
  font-size: ${fonts.textSmall.fontSize};
  line-height: ${fonts.textSmall.lineHeight};
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 4px;
`;

export const UserOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
  cursor: pointer;
  background: ${colors.transparent};
`;

export const ProfilePicture = styled.img`
  width: 36px;
  height: 36px;
`;

export const Settings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
