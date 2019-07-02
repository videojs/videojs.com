/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import { theme } from '../utils/styles';

import ocrExtendedFont from '../../static/fonts/OCRAEXT.woff'
import './normalize.css';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'OCR A Extended';
    font-style: normal;
    font-weight: normal;
    src: local('OCR A Extended'), url(${ocrExtendedFont}) format('woff');
  }

  html{
    font-family: ${props => props.theme.defaultSerif};
    font-size: 100%;
    font-weight: 400;
    line-height: ${props => 23 / 15};
    color: #000;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
  }

  html,body{
    height: 100%;
  }

  body {
    font-family: ${props => props.theme.defaultSans};
  }

  /* Base / Defaults */
  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  dl,
  dd,
  ol,
  ul,
  form,
  fieldset,
  legend,
  table,
  th,
  td,
  caption,
  hr {
    margin: 0;
    padding: 0;
  }

  abbr[title],
  dfn[title] {
    cursor: help;
  }

  a,
  u,
  ins {
    text-decoration: none;
  }

  u {
    text-decoration: underline;
  }

  ins {
    border-bottom: 1px solid;
  }

  object,
  img {
    font-style: italic;
    vertical-align: middle;
    max-width: 100%;
  }

  label,
  input,
  textarea,
  button,
  select,
  option {
    cursor: pointer;
  }

  .text-input:active,
  .text-input:focus,
  textarea:active,
  textarea:focus {
    cursor: text;
    outline: none;
  }

  ::-moz-selection {
    background-color: ${props => props.theme.selectionColor};
    color: #000;
  }

  ::selection {
    background-color: ${props => props.theme.selectionColor};
    color: #000;
  }

  .hidden {
    display: none;
  }
`;

const Layout = ({ children, themeName }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={{ ...theme, currentTheme: theme[themeName] }}>
        <>
          <GlobalStyles />
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
