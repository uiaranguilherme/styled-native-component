declare namespace UxComponents {
    interface Margin {
        t: number,
        b: number,
        l: number,
        r: number
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
}

export = UxComponents;
export as namespace UxComponents;