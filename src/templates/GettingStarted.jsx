import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import GettingStartedHero from '../components/GettingStartedComponents/Hero';

const MainContentWrapper = styled.div`
  margin-top: 100px;
`;

const ArticleWrapper = styled.div`
  h2, h3, p, pre {
    margin-bottom: 20px;
  }

  p {
    color: #6b6b6b;
    font-size: 16px;
    line-height: 2;
  }
`;

const GettingStartedPage = ({ data: { mdx } }) => (
  <Layout>
    <SEO
      title="Getting Started with Video.js - Video.js: The Player Framework"
    />
    {console.log('mdx', mdx)}
    <GettingStartedHero />
    <Container>
      <MainContentWrapper>
        <ArticleWrapper>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </ArticleWrapper> 
      </MainContentWrapper>
    </Container>
  </Layout>
);

export default GettingStartedPage;

export const pageQuery = graphql`
  query GettingStartedPage($id: String!) {
    mdx(id: { eq: $id }) {
      code {
        body
      }
      tableOfContents
    }
  }
`;
