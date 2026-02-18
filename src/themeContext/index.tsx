import { useMediaQuery, type Theme } from "@mui/material";
import { createContext, useEffect, useState } from "react";
import { AppDarkTheme, AppLightTheme } from "./theme";
import { IThemeMode, type IThemeContext } from "./types";

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemecontextProvider: React.FunctionComponent<
  React.PropsWithChildren
> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.Light);
  const [theme, setTheme] = useState<Theme>(AppLightTheme);
  const switchThemeMode = (mode: IThemeMode) => {
    setThemeMode(mode);
  };

  const systemTheme: Exclude<IThemeMode, IThemeMode.System> = useMediaQuery(
    "(preferes-color-scheme: dark)",
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
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, switchThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
