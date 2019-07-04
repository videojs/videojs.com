import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import BlogHero from '../components/BlogComponents/BlogHero';
import BlogArticle from '../components/BlogComponents/BlogArticle';
import BlogRecentPosts from '../components/BlogComponents/BlogRecentPosts';
import { extractNodes } from '../utils/graphql';

const StyledContainer = styled(Container)`
  display: flex;
  margin-top: 7em;
`;

const ArticlesWrapper = styled.div`
  width: 71%;
`;

const Sidebar = styled.div`
  width: 29%;
`;

const BlogArticleTemplate = ({ data: { mdx } }) => {

  return (
    <Layout>
      <SEO title='Video.js Blog' />
      <BlogHero />
      <StyledContainer>
        <ArticlesWrapper>
          <BlogArticle key={shortid.generate()} article={mdx} />
        </ArticlesWrapper>
        <Sidebar>
          <BlogRecentPosts />
        </Sidebar>
      </StyledContainer>
    </Layout>
  );
};

export default BlogArticleTemplate;

export const blogArticleQuery = graphql`
  query blogArticleQuery ($id: String!) {
    mdx (id: { eq: $id }) {
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
`
