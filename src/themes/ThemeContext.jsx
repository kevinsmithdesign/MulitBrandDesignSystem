import React, { createContext, useState, useMemo, useContext } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import ThemeThree from "../themes/ThemeThree";
import ThemeOne from "../themes/ThemeOne"; // Bluehost
import ThemeTwo from "../themes/ThemeTwo";
import ThemeFour from "../themes/ThemeFour";

const ThemeContext = createContext();

export const ThemeProviderDesignSystem = ({ children }) => {
  const [themeName, setThemeName] = useState("Bluehost");

  const theme = useMemo(() => {
    switch (themeName) {
      case "Bluehost":
        return ThemeOne;
      case "HostGator":
        return ThemeTwo;
      case "Network Solutions":
        return ThemeThree;
      default:
        return ThemeFour;
    }
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, theme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
