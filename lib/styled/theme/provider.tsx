import React, { createContext, ReactNode, useState } from "react";
import { mode, theme, ThemeContext as IThemeContext } from "./index";

const initialValues : IThemeContext = {
    palette: theme.palette["light"],
    mode: "light",
    typograph: theme.typograph,
    handleChangeMode: () => {}
}
const ThemeContext = createContext<IThemeContext>(initialValues);

export { ThemeContext }
export default ({ children } : { children: ReactNode }) => {
    const [mode, setMode] = useState<mode>("light");
    const handleChangeMode = (mode: mode) => setMode(mode);

    return(
        <ThemeContext.Provider value={{
            ...initialValues,
            mode,
            handleChangeMode
        }}>
            {children}
        </ThemeContext.Provider>
    )
}