import { createContext, useState } from "react";

const DarkModeContext = createContext();

export default function DarkModeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const DarkMode = DarkModeContext;
