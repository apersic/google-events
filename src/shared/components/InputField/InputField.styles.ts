import styled from "styled-components";
import { colors } from "../../styles/base/colors";
import { fonts } from "../../styles/base/fonts";

export const InputField = styled.div<{ $error?: boolean }>`
  width: 100%;
  border-radius: 4px;
  background-color: ${colors.white};
  padding: 4px 8px;
  position: relative;

  ${({ $error }) => {
    if ($error) {
      return `
                border-color: ${colors.error};

                & > span.error {
                    position: absolute;
                    bottom: -1rem;
                    font-size: ${fonts.text.fontSize};
                    line-height: ${fonts.text.lineHeight};
                    color: ${colors.error};
                    text-transform: capitalize;
                }
            `;
    }
  }}
`;
