import { createTheme } from "@mui/material";
import { green, purple, red } from "@mui/material/colors";
import type { Theme } from "@mui/material/styles";

export const AppLightTheme: Theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: red[500],
        },
      },
    },
  },
  palette: {
    mode: "light",
    background: {
      default: green[500],
      paper: green[200],
    },
  },
});

export const AppDarkTheme: Theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: red[500],
        },
      },
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: purple[900],
      paper: purple[600],
    },
  },
});
