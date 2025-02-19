import React, { useEffect, useState, createContext, useContext } from "react";
type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};
const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  toggleDarkMode: () => {}
});
export const DarkModeProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return <DarkModeContext.Provider value={{
    darkMode,
    toggleDarkMode
  }}>
      {children}
    </DarkModeContext.Provider>;
};
export const useDarkMode = () => useContext(DarkModeContext);