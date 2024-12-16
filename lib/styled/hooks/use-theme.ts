import { useContext } from "react"
import { ThemeContext } from "../theme/provider"

export default () => {
    const { palette, mode, typograph, handleChangeMode } = useContext(ThemeContext);
    return {  palette, mode, typograph, handleChangeMode  }
}