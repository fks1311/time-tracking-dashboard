import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/style";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Reset />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
