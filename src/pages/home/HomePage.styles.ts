import styled from "styled-components";
import { colors } from "../../shared/styles/base/colors";
import { responsive } from "../../shared/styles/utils/responsive";
import { fonts } from "../../shared/styles/base/fonts";

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 64px 120px;
  background-color: ${colors.grey2};

  ${responsive.tablet_landscape} {
    padding: 64px;
  }

  ${responsive.phone} {
    padding: 24px 16px;
  }
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
