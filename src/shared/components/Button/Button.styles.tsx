import styled from "styled-components";
import { colors } from "../../styles/base/colors";
import { responsive } from "../../styles/utils/responsive";
import { fonts } from "../../styles/base/fonts";

export const Button = styled.button`
    border-radius: 4px;
    border: 0;
    color: ${colors.white};
    background-color: ${colors.sucess};
    padding: 14px 24px;
    font-weight: ${fonts.fontWeightBold},
    font-size: ${fonts.primaryButton.fontSize},
    line-height: ${fonts.primaryButton.lineHeight},
    text-transform: 'none',
    width: 100%;
    min-width: 220px;
    cursor: pointer;

    &:disabled {
        background-color: ${colors.grey2};
        border: 1px solid ${colors.white};
    }

    &.secondary {
        background-color: transparent;
        border: 1px solid ${colors.sucess};
        color: ${colors.sucess};
    }

    ${responsive.phone} {
        min-width: unset;
        white-space: nowrap
    }
`;
