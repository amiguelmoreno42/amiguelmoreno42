import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --primary-color: #262b31;
    --primary-color-light: #44505a; 
    
    --secundary-color: #FFFFFF;
    
    --terciary-color: #77f8e9;

  }

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Nunito", sans-serif;
  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
 
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

`;

export default GlobalStyles;
