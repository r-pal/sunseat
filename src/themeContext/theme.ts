import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import type { Theme } from "@mui/material/styles";

export const AppLightTheme: Theme = createTheme({
  palette: {
    background: {
      default: green[500],
      paper: green[200],
    },
  },
});

export const AppDarkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: purple[900],
      paper: purple[600],
    },
  },
});
