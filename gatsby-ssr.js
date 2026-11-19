/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');
const { canonicalUrl } = require('./src/utils/canonical');

require('./src/styles/fonts.css');

exports.onRenderBody = ({ pathname, setHeadComponents }) => {
  const href = canonicalUrl(pathname);

  if (href) {
    setHeadComponents([<link key="canonical" rel="canonical" href={href} />]);
  }
};
