import React from 'react';
import Layout from './src/components/Layout';
import ThemeProvider from './src/components/ThemeProvider';

// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {
  // console.log('new pathname', location.pathname);
  // console.log('old pathname', prevLocation ? prevLocation.pathname : null);
};

// Wraps root in the theme provider
export const wrapRootElement = ({ element, props }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>{element}</Layout>
);