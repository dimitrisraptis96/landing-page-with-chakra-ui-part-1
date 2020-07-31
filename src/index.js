import React from "react";
import ReactDOM from "react-dom";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";

import App from "./App";
import customTheme from "./utils/theme";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
