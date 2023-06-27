import styled from "styled-components";
import { colors } from "../../styles/base/colors";

interface InputProps {
  isError?: boolean;
}

export const Input = styled.input<InputProps>`
  height: 32px;
  border: ${colors.listItemBorder};
  background: ${colors.white};
  color: ${colors.black};
  border-radius: 4px;
  padding: 0 16px;

  &::placeholder {
    color: ${colors.black};
  }

  &:focus,
  &:active {
    outline: none;
  }

  ${(props) =>
    props.isError &&
    `
    border: ${colors.inputErrorBorder}
  `}
`;
