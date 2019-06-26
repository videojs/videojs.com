import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import GettingStartedHero from '../components/GettingStartedComponents/Hero';
import ArticleNav from '../components/ArticleNav';
import WithAutoLinkHeaders from '../components/WithAutoLinkHeaders';

const MainContentWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  width: 100%;
`;

const StyledArticleNav = styled(ArticleNav)`
  flex-basis: 25%;
  padding-right: 70px;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    ul {
      padding-left: 25px;

      a {
        color: #6b6b6b;
        font-weight: normal;
        padding: 0;

        &.active {
          background: none;
          color: #d291e2;
        }
      }
    }

    a {
      display: block;
      color: #000;
      font-weight: bold;
      padding: 10px;

      &.active {
        background: #f3e5f7;
        color: #000;
      }
    }
  }
`;

const ArticleWrapper = styled.div`
  flex-basis: 75%;

  h2, h3, p, pre {
    margin-bottom: 20px;
  }

  p {
    color: #6b6b6b;
    font-size: 16px;
    line-height: 2;
  }
`;

const GettingStartedPageTemplate = ({ data: { mdx }, location }) => (
  <Layout>
    <SEO
      title="Getting Started with Video.js - Video.js: The Player Framework"
    />
    <GettingStartedHero />
    <Container>
      <MainContentWrapper>
        <StyledArticleNav
          path={location.pathname}
          items={mdx.tableOfContents.items}
        />
        <ArticleWrapper>
          <WithAutoLinkHeaders>
            <MDXRenderer>{mdx.code.body}</MDXRenderer>
          </WithAutoLinkHeaders>
        </ArticleWrapper> 
      </MainContentWrapper>
    </Container>
  </Layout>
);

export default GettingStartedPageTemplate;

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
