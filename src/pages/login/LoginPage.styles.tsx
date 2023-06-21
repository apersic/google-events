import styled from "styled-components";
import { responsive } from "../../shared/styles/utils/responsive";

export const LoginPage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  margin-top: 120px;

  ${responsive.phone} {
    padding: 0 16px;
  }
`;
