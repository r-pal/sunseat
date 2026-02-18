import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
import type { Theme } from "@mui/material/styles";

export const AppLightTheme: Theme = createTheme({
  palette: {
    background: {
      default: purple[500],
      paper: purple[200],
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
