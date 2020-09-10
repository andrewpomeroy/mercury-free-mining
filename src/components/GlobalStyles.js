import React from 'react';
import { Global, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

const makeGlobalStyles = theme => css`
  body {
    font-family: ${theme.fontFamilies.body};
    color: ${theme.colors.text};
  }
`

const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
))

export default GlobalStyles;