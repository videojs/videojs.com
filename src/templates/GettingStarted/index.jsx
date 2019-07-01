import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Container from '../../components/Container';
import ArticleNav from '../../components/ArticleNav';
import WithAutoLinkHeaders from '../../components/WithAutoLinkHeaders';
import GettingStartedHero from './GettingStartedHero';
import { media } from '../../utils/styles';

const StyledContainer = styled(Container)`
  width: 100%;
  padding: 2em;

  ${media.medLarge`
    padding: 6em;
  `}
`

const MainContentWrapper = styled.div`
  display: flex;
  margin-top: 2em;
  width: 100%;
`;

const StyledArticleNav = styled(ArticleNav)`
  width: 25%;
  padding-right: 40px;

  ${media.medLarge`
    padding-right: 140px;
  `}

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
      display:inline-block;
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
  width: 75%;

  h2, h3 {
    font-size: 28px;
    margin-bottom: 0.4em;
  }
  
  p {
    color: #424242;
    font-size: 18px;
    line-height: 1.78;
    margin-bottom: 2.8em;
  }

  a {
    color: #a043b6;
  }

  .gatsby-highlight {
    margin-bottom: 3.5em;
  }
`;

const GettingStartedPageTemplate = ({ data: { mdx }, location }) => (
  <Layout>
    <SEO
      title="Getting Started with Video.js - Video.js: The Player Framework"
    />
    <GettingStartedHero />
    <StyledContainer>
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
    </StyledContainer>
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
