import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62,5%;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  body {
    font-family: 'Piedra', cursive;
    font-size: 1.2rem;
     background: linear-gradient(to top, #ece9e6, #ffffff);
     background-repeat: no-repeat;
     background-size: cover;
  }
`;

export default GlobalStyle;
