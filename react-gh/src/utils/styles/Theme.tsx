import { webLightTheme, webDarkTheme } from "@fluentui/react-components";

export const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
export const currentTheme = dark ? webDarkTheme : webLightTheme;
