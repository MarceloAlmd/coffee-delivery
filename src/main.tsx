import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/index.tsx";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global.styles.ts";
import { defaultTheme } from "./styles/defaultTheme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
