import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import ArticleNav from '../components/ArticleNav';
import WithAutoLinkHeaders from '../components/WithAutoLinkHeaders';
import GettingStartedHero from '../components/GettingStartedComponents/GettingStartedHero';
import { media } from '../utils/styles';

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
  width: 24%;
  padding-right: 2.5em;

  > ul {
    margin-left: -3.5em;

    ${media.medLarge`
      margin-left: -6.25em;
    `}
  }

  ul {
    list-style-type: none;
    padding: 0;

    ul {
      li:last-child {
        margin-bottom: 1.3em;
      }

      a {
        color: #6b6b6b;
        font-weight: normal;
        padding: 0.4em 0.625em 0.4em 5.375em;
        margin: 0;
      }
    }

    a {
      display: inline-block;
      color: #000;
      font-weight: bold;
      line-height: 1;
      padding: 0.875em 1em 0.875em 3.5em;
      margin-bottom: 0.3em;

      &:hover {
        color: #a043b6;
      }

      &.active {
        background: #f3e5f7;
        color: #000;
      }
    }
  }
`;

const ArticleWrapper = styled.div`
  width: 76%;

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
