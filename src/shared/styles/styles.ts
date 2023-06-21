import styled from "styled-components";
import { colors } from "./base/colors";
import { fonts } from "./base/fonts";
import { responsive } from "./utils/responsive";

export const MainLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.white};
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 72px);
  width: 100vw;
`;

export const PageTitle = styled.h1`
  font-size: ${fonts.title.fontSize};
  line-height: ${fonts.title.lineHeight};
  font-weight: ${fonts.fontWeightBold};
  text-align: left;

  ${responsive.tablet_portrait} {
    font-size: ${fonts.title.fontSizeMobile};
  }
`;
