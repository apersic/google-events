import styled from "styled-components";
import { fonts } from "../../styles/base/fonts";
import { responsive } from "../../styles/utils/responsive";

export const NavBar = styled.div`
  width: 100vw;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  position: relative;

  ${responsive.tablet_portrait} {
    padding: 0 12px;
  }
`;

export const AppName = styled.span`
  display: inline-block;
  font-size: ${fonts.title.fontSize};
  line-height: ${fonts.title.lineHeight};

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

export const UserOptions = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
  border: 0;
  cursor: pointer;
`;

export const ProfilePicture = styled.img`
  width: 36px;
  height: 36px;
`;
