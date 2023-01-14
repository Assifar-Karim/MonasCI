import { createTheme } from "@mui/material/styles";
import "@fontsource/inter";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Helvetica Neue", "Arial", "sans-serif"].join(","),
    allVariants: {
      color: "#2A3342",
    },
    h1: {
      fontSize: "2em",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.5em",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.17em",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "0.95em",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "0.95em",
      fontWeight: "normal",
    },
  },
  palette: {
    primary: {
      main: "#F8911E",
      contrastText: "#fff",
    },
    secondary: {
      main: "#D72D20",
      contrastText: "#fff",
    },
    common: {
      white: "#fff",
      black: "#2A3342",
    },
    grey:{
      50: "#d9d9d9",
      100: "#969696",
    }
  },
});

export default theme;
