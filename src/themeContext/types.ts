export enum IThemeMode {
  Light = "Light",
  Dark = "Dark",
  System = "System",
}

export interface IThemeContext {
  themeMode: IThemeMode;
  switchThemeMode: (mode: IThemeMode) => void;
}
