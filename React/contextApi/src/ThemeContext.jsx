import { createContext } from "react";


export let ThemeContext = createContext({      
    theme: 'light',
    toggleTheme: () => {},
});