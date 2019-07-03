import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlogHero from '../components/BlogComponents/BlogHero';
import { extractNodes } from '../utils/graphql';

const BlogList = ({ data: { allMdx } }) => {
  const articles = extractNodes(allMdx);
  console.log('articles', articles);

  return (
    <Layout>
      <SEO title='Video.js Blog' />
      <BlogHero />
      {/* {articles.map((article) => (
        <MDXRenderer>{article.code.body}</MDXRenderer>
      ))} */}
    </Layout>
  );
};

export default BlogList;

export const blogListQuery = graphql`
  query blogListQuery ($skip: Int!, $limit: Int!) {
    allMdx (
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          code {
            body
          }
        }
      }
    }
  }
`
