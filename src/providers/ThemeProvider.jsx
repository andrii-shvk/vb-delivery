import { LOCALSTORAGE_THEME_KEY, Theme } from "@/const/const";
import { createContext, memo, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = memo(({children, initialTheme}) => {
    const [theme, setTheme] = useState(initialTheme || Theme.LIGHT);

    useEffect(() => {
        const data = localStorage.getItem(LOCALSTORAGE_THEME_KEY);
        if (data) {
            setTheme(data);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCALSTORAGE_THEME_KEY, theme)
    }, [theme])

    const defaultProps = {theme, setTheme};

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
})
 
export {ThemeProvider};