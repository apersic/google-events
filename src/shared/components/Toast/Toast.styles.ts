import styled from "styled-components";
import { colors } from "../../styles/base/colors";

export const Toast = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  right: 16px;
  bottom: 16px;
  background-color: ${colors.white};
  box-shadow: ${colors.toastBoxShadow};
  border-radius: 4px;
  padding: 24px;
  z-index: 10;
`;
