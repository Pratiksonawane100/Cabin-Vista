// import PropTypes from "prop-types";
// import { createContext, useContext, useEffect } from "react";
// import { useLocalStorageState } from "../hooks/useLoacalStorageState";

// const DarkModeContext = createContext();

// function DarkModeProvider({ children }) {
//   const [isDarkMode, setIsDarkMode] = useLocalStorageState(
//     window.matchMedia("(prefers-color-scheme: dark)").matches,
//     "isDarkMode"
//   );

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark-mode");
//       document.documentElement.classList.remove("light-mode");
//     } else {
//       document.documentElement.classList.add("light-mode");
//       document.documentElement.classList.remove("dark-mode");
//     }
//   }, [isDarkMode]);

//   function toggleDarkMode() {
//     setIsDarkMode((isDark) => !isDark);
//   }

//   return (
//     <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// }

// // Define PropTypes for the DarkModeProvider component
// DarkModeProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// function useDarkMode() {
//   const context = useContext(DarkModeContext);
//   if (context === undefined) {
//     throw new Error("DarkModeContext was used outside of DarkModeProvider");
//   }
//   return context;
// }

// export { DarkModeProvider, useDarkMode };
