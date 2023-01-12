import { createTheme } from "@mui/material/styles";
import "@fontsource/inter";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    primary: {
      main: "#21AEE3",
      contrastText: "#fff",
    },
    secondary: {
      main: "#D7BE69",
      contrastText: "#fff",
    },
    common: {
      white: "#fff",
      black: "#000",
    },
  },
});

export default theme;
