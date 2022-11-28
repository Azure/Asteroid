import { AzureThemeDark, AzureThemeLight } from "@fluentui/azure-themes";

export const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const { semanticColors, palette } = dark ? AzureThemeDark : AzureThemeLight;

export const currentTheme = { semanticColors, palette };
export const currentSemanticColors = semanticColors;
export const currentPalette = palette;