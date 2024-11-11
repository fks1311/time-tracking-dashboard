import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reset from "styled-reset";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./utils/style";

const root = ReactDOM.createRoot(document.getElementById("root"));
const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
  font-family: Rubik-Light
  }
`;

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
