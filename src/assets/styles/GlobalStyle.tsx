import { css, Global } from '@emotion/react';
const baseStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  body,
  :root {
    padding: 0;
  }
  button {
    cursor: pointer;
    border: none;
  }
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
  }
  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;
