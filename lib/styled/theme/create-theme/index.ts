import { Mapper, Theme } from "..";
import defaultTheme from "./default-theme";

const mapper = (map: Mapper, defaultMap: Mapper) => {
    if(typeof map === "object"){
        Object.keys(map).forEach(key => {
            if(typeof map[key] !== "object"){
                defaultMap[key] = map[key];
                return;
            }

            defaultMap[key] = mapper(map[key], defaultMap[key]);
        });

        return defaultMap;
    }
}

export default (theme?: Partial<Theme>) : Theme => {
    if(theme === undefined){
        return defaultTheme;
    }

    if(typeof theme !== "object"){
        throw new Error("Theme necessary object");
    }
    
    return mapper(theme, defaultTheme) as Theme;
}