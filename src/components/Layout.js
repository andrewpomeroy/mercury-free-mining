import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import { Global, css, ThemeContext } from '@emotion/core';
import Footer from './Footer';
import Navbar from './Navbar';
import './all.sass';
import useSiteMetadata from './SiteMetadata';
import fontFaceStyles from '../styles/fonts';
import { withTheme } from 'emotion-theming';

const makeGlobalStyles = theme => css`
  ${fontFaceStyles}
  body {
    font-family: "Sharp Sans";
    color: ${theme.colors.text};
  }
  /* a {
    color: ${theme.colors.link};
  } */
`

const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
))
  
const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <GlobalStyles />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
