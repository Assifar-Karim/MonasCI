import "./App.css";
import * as React from "react";
import NavBar from "./components/navbar/NavBar";
import theme from "theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
