import React from "react";
import theme from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <>{renderRoutes()}</>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
