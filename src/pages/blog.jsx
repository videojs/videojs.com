import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlogHero from '../components/BlogComponents/BlogHero';
import { extractNodes } from '../utils/graphql';

const Blog = ({ data: { allMdx } }) => {
  const articles = extractNodes(allMdx);

  return (
    <Layout>
      <SEO title="Video.js Blog" />
      <BlogHero />
      {/* {articles.map((article) => (
        <MDXRenderer>{article.code.body}</MDXRenderer>
      ))} */}
    </Layout>
  );
};

export default Blog;

export const pageQuery= graphql`
  query BlogArticles {
    allMdx (filter: { fileAbsolutePath: { regex: "/blog/" } }) {
      edges {
        node {
          code {
            body
          }
        }
      }
    }
  }
`;
