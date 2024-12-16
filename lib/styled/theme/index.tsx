import createTheme from "./create-theme";
import { Theme, mode, ThemeContext, Palette } from "./index.d";

const theme = createTheme();
export { theme, Theme, Palette, ThemeContext, createTheme, mode }