import { ThemeProvider, useMediaQuery } from "@mui/material";
import { useMemo, useState } from "react";
import { ThemeContext } from "./context";
import { AppDarkTheme, AppLightTheme } from "./theme";
import { IThemeMode } from "./types";

export const ThemeContextProvider: React.FunctionComponent<
  React.PropsWithChildren
> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.Dark);

  const systemTheme: Exclude<IThemeMode, IThemeMode.System> = useMediaQuery(
    "(prefers-color-scheme: dark)",
  )
    ? IThemeMode.Dark
    : IThemeMode.Light;

  const theme = useMemo(() => {
    switch (themeMode) {
      case IThemeMode.Light:
        return AppLightTheme;
      case IThemeMode.Dark:
        return AppDarkTheme;
      case IThemeMode.System:
        return systemTheme === IThemeMode.Light ? AppLightTheme : AppDarkTheme;
      default:
        return AppLightTheme;
    }
  }, [themeMode, systemTheme]);

  const switchThemeMode = (mode: IThemeMode) => {
    setThemeMode(mode);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, switchThemeMode }}>
      <ThemeProvider theme={theme}> {children} </ThemeProvider>
    </ThemeContext.Provider>
  );
};
