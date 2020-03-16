import React from 'react';

export const themes = {
    dark: {
        classes: 'black-theme'
    },
    light: {
        classes: 'white-theme'
    }
}


const ThemeContext = React.createContext(themes.light);

export default ThemeContext;