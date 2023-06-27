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
  position: fixed;
  left: 0;
  top: 72px;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 32px;
  margin: 80px 0 72px;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 64px;

  ${responsive.tablet_portrait} {
    padding: 0 16px;
    margin-top: 64px;
  }
`;

export const PageTitle = styled.h1`
  font-size: ${fonts.title.fontSize};
  line-height: ${fonts.title.lineHeight};
  font-weight: ${fonts.fontWeightBold};
  text-align: left;

  ${responsive.phone} {
    width: 100%;
  }
`;
