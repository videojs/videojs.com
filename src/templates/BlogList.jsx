import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import BlogHero from '../components/BlogComponents/BlogHero';
import BlogArticle from '../components/BlogComponents/BlogArticle';
import { extractNodes } from '../utils/graphql';

const StyledContainer = styled(Container)`
  display: flex;
  margin-top: 7em;
`;

const ArticlesWrapper = styled.div`
  width: 71%;
`;

const BlogList = ({ data: { allMdx } }) => {
  const articles = extractNodes(allMdx);

  return (
    <Layout>
      <SEO title='Video.js Blog' />
      <BlogHero />
      <StyledContainer>
        <ArticlesWrapper>
          {articles.map((article) => (
            <BlogArticle key={shortid.generate()} article={article} />
          ))}
        </ArticlesWrapper>
      </StyledContainer>
    </Layout>
  );
};

export default BlogList;

export const blogListQuery = graphql`
  query blogListQuery ($skip: Int!, $limit: Int!) {
    allMdx (
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date (formatString: "YYYY-MM-DD")
            author {
              name
              github
            }
          }
          code {
            body
          }
        }
      }
    }
  }
`
