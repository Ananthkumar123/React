
import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",        // passing the values and methods 
    lightTheme: () => { },
    darkTheme: () => { }

})
export const ThemeProvider = ThemeContext.Provider

export default function usetheme() {

    return useContext(ThemeContext)
}