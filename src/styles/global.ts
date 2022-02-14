import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Eina;
    src: url('fonts/Eina-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: Eina;
    src: url('fonts/Eina-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;
 
export default GlobalStyle;