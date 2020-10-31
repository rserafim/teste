import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    max-width: 500px;
    margin: 0 auto;
  }
  html {
  height: -webkit-fill-available;
  height: 100%;
}
  body {
    background: #eee;
    color: #CC00EB;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer
  }
`;
