import { createContext, useContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    darkModeUpdate(!darkMode);
  };

  useEffect(() => {
    const isDarkMode = 'dark' === localStorage.getItem("theme");
      console.log(isDarkMode);
      setDarkMode(isDarkMode);
      darkModeUpdate(isDarkMode);

  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function darkModeUpdate(darkMode) {
  if (darkMode) {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    localStorage.theme= 'light'
  }
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}
