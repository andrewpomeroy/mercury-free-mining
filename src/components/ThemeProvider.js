import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from '../theme';

const ThemeProvider = ({ children }) => {
  const RenderChildren = React.memo(({ children }) => <div>{children}</div>);

  return ( 
    <EmotionThemeProvider theme={theme}>
      <RenderChildren>{children}</RenderChildren>
    </EmotionThemeProvider>
  )}

export default ThemeProvider;