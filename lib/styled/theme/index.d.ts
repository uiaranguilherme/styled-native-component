import { TextStyle } from "react-native"

export type mode = "light" | "dark";

export interface TypographProps {
    fontWeight: TextStyle["fontWeight"]
    fontSize: TextStyle["fontSize"]
    letterSpacing: TextStyle["letterSpacing"]
}

export interface Typograph {
    h1: TypographProps,
    h2: TypographProps,
    h3: TypographProps,
    h4: TypographProps,
    h5: TypographProps,
    h6: TypographProps,
    paragraphy: TypographProps,
    subparagraph: TypographProps,
}

export interface PaletteKeys {
    main: string
    light: string
    dark: string
}

export interface Palette {
    primary: PaletteKeys,
    secundary: PaletteKeys,
    error: PaletteKeys,
    warning: PaletteKeys,
    info: PaletteKeys,
    success: PaletteKeys,
    background: PaletteKeys,
    text: PaletteKeys
}

export interface Theme {
    palette: {
        light: Palette,
        dark: Palette
    }
    typograph: Typograph
}

export interface ThemeContext {
    mode: mode,
    palette: Palette,
    typograph: Typograph,
    handleChangeMode: (mode: mode) => void
}

export interface Color {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
}

export interface Mapper {
    [key: string]: any
}