import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.product.purple};
  }

  body {
    background-color: ${(props) => props.theme.base.background};
    color: ${(props) => props.theme.base.title};
    -webkit-font-smoothing: antialiased
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }


`;
