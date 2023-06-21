import styled from "styled-components";
import { colors } from "../../shared/styles/base/colors";
import { responsive } from "../../shared/styles/utils/responsive";
import { fonts } from "../../shared/styles/base/fonts";

export const MainLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.grey2};
`;

export const PageTitle = styled.h1`
  font-size: ${fonts.title};
  font-weight: ${fonts.fontWeightBold};
  margin: 32px 0;
  text-align: left;

  ${responsive.tablet_portrait} {
    font-size: ${fonts.title.fontSizeMobile};
  }
`;
