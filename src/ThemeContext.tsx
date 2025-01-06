import React, { SetStateAction } from "react";
type ThemeType = "light" | "dark" | "purple"
export const ThemeContext = React.createContext<{ theme: ThemeType, setTheme: React.Dispatch<SetStateAction<ThemeType>> }>({ theme: "light", setTheme: () => { } })

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = React.useState<ThemeType>("light")
    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}