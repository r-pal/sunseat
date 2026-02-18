export enum IThemeMode {
  Light = "light",
  Dark = "dark",
  System = "system",
}

export interface IThemeContext {
  themeMode: IThemeMode;
  switchThemeMode: (mode: IThemeMode) => void;
}
