import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from '../theme';

// const ThemeContext = React.createContext(theme);

// const ThemeProvider = () => {

//   <ThemeContext.Provider
//     value={{
//       theme
//     }}
//   >
//     {React.memo(children)}
//   </ThemeContext.Provider>
// }

// export default ThemeContext;

// export { ThemeProvider };

const ThemeProvider = ({ children }) => (
    <EmotionThemeProvider theme={theme}>
      {children}
    </EmotionThemeProvider>
  )

export default ThemeProvider;