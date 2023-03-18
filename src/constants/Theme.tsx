import { createContext } from "react";
export type themeType = "light"|"dark"
export type ThemeContextType = {
    theme: themeType;
    toggleTheme: () => void;
  };

export const ThemeContext = createContext<ThemeContextType|null>(null);