import React from 'react';
import Layout from './src/components/Layout';
import ThemeProvider from './src/components/ThemeProvider';

// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {
  // console.log('new pathname', location.pathname);
  // console.log('old pathname', prevLocation ? prevLocation.pathname : null);
};

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => (
  <ThemeProvider>
    {/* <Layout {...props}>{element}</Layout> */}
    {element}
  </ThemeProvider>
);
