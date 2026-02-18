import { ThemeProvider, useMediaQuery, type Theme } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import { AppDarkTheme, AppLightTheme } from "./theme";
import { IThemeMode, type IThemeContext } from "./types";

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeContextProvider: React.FunctionComponent<
  React.PropsWithChildren
> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.Light);
  const [theme, setTheme] = useState<Theme>(AppLightTheme);

  const systemTheme: Exclude<IThemeMode, IThemeMode.System> = useMediaQuery(
    "(prefers-color-scheme: dark)",
  )
    ? IThemeMode.Dark
    : IThemeMode.Light;

  useEffect(() => {
    switch (themeMode) {
      case IThemeMode.Light:
        setTheme(AppLightTheme);
        break;
      case IThemeMode.Dark:
        setTheme(AppDarkTheme);
        break;
      case IThemeMode.System:
        if (systemTheme === IThemeMode.Light) {
          setTheme(AppLightTheme);
        } else {
          setTheme(AppDarkTheme);
        }
        break;
      default:
        setTheme(AppLightTheme);
        break;
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
