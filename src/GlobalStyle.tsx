import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height:100%;
  }
  body{
    margin:0;

  }
  #root {
    min-height:100vh;
  }
`;

export default GlobalStyle;
