import styled, { css } from "styled-components";
import { CoffeeDescriptionTypes } from "./type";

const bgColorVariants = {
  darkYellow: "#C47F17",
  yellow: "#DBAC2C",
  gray: "#574F4D",
  purple: "#8047F8",
};

export const Container = styled.div<CoffeeDescriptionTypes>`
  display: flex;
  align-items: center;

  gap: 5.5px;

  .iconContent {
    width: 32px;
    height: 32px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) => {
      return css`
        background-color: ${bgColorVariants[props.bgColor]};
      `;
    }}

    > svg {
      color: ${(props) => props.theme.base.white};
    }
  }

  > span {
    color: ${(props) => props.theme.base.text};
  }
`;
