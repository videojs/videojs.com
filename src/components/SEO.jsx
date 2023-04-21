/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from 'react';
 import PropTypes from 'prop-types';
 import { useStaticQuery, graphql } from 'gatsby';
 
 function Seo({ description, lang, meta, keywords, title, ...props }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             author
           }
         }
       }
     `
   );

   const metaDescription = description || site.siteMetadata.description;
 
   return (
     <>
     <title>{`${title} | ${site.siteMetadata.title}`}</title>
     <link rel="shortcut icon" href="/favicon.ico" />
     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600" />
     <meta name="description" content={`${title}${title.includes('Video.js') ? '' : ' | Video.js'}`}></meta>
     <meta name="og:title" content={title}></meta>
     <meta name="og:description" content={metaDescription}></meta>
     <meta name="og:type" content="website"></meta>
     <meta name="twitter:card" content="summary"></meta>
     <meta name="twitter:creator" content={site.siteMetadata.author}></meta>
     <meta name="twitter:title" content={`${title}${title.includes('Video.js') ? '' : ' | Video.js'}`}></meta>
     <meta name="twitter:description" content={metaDescription}></meta>
     {keywords.length > 0 ? <meta name="keywords" content={keywords.join(', ')}></meta> : null}
     </>
   );
 }
 
 Seo.defaultProps = {
   lang: `en`,
   meta: [],
   keywords: [],
   description: ``,
 };
 
 Seo.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   keywords: PropTypes.arrayOf(PropTypes.string),
   title: PropTypes.string.isRequired,
 };
 
 export default Seo;
 