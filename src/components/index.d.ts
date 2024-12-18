import { ReactNode } from "react";
import { ViewStyle, TextInputProps } from "react-native";

declare namespace UxComponents {
    interface Margin {
        t?: number,
        b?: number,
        l?: number,
        r?: number
    }
    
    interface Padding {
        t: number,
        b: number,
        l: number,
        r: number
    }
    
    type Color = "primary" | "secundary" | string;
    type Background = "main" | "light" | "dark";
    type Elevation = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    
    interface CardProps {
        children: ReactNode,
        color?: Background,
        margin?: Margin,
        padding?: Padding,
        elevation?: Elevation
    }

    interface TextFieldProps extends TextInputProps {
        label: string
        variant: "filled" | "outlined" | "standard"
        designer: "top-on-press" | "non-top-on-press"
        error?: boolean
        helperText?: string
        color?: "tonal-background-offset" | Color
        leftIcon?: ReactNode
        rightIcon?: ReactNode
        fullWidth?: boolean
        width?: ViewStyle["width"]
        margin?: Margin,
    }
}

export = UxComponents;
export as namespace UxComponents;