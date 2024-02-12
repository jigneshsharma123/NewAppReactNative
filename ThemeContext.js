import React, { createContext, useState, useContext } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Create a custom hook to consume the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    // Define the theme object
    const theme = {
        darkMode,
        toggleDarkMode,
        backgroundColor: darkMode ? 'black' : 'white',
        textColor: darkMode ? 'white' : 'black',
        // Add more theme properties as needed
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};
