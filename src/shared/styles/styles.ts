import styled from "styled-components";
import { colors } from "./base/colors";
import { fonts } from "./base/fonts";
import { responsive } from "./utils/responsive";

export const MainLayout = styled.div`
  height: 100vh;
  background-color: ${colors.white};
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 72px);
`;

export const PageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  margin: 80px 0 72px;

  ${responsive.tablet_portrait} {
    padding: 0 16px;
    margin-top: 64px;
    align-items: flex-start;
  }
`;

export const PageTitle = styled.h1`
  font-size: ${fonts.title.fontSize};
  line-height: ${fonts.title.lineHeight};
  font-weight: ${fonts.fontWeightBold};
  text-align: left;
`;
