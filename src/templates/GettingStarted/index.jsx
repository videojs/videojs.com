import React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import { media } from '../../utils/styles';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Container from '../../components/Container';
import ArticleNav from '../../components/ArticleNav';
import WithAutoLinkHeaders from '../../components/WithAutoLinkHeaders';
import GettingStartedHero from './GettingStartedHero';

const ContainerStyled = styled(Container)`
  width: 100%;
  padding: 2em;
  ${media.medLarge`
    padding: 6em;
  `}
`
const MainContentWrapper = styled.div`
  display: flex;
  margin-top: 100px;
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

  h2, h3, p, pre {
    margin-bottom: 20px;
  }
  
  p {
    color: #424242;
    font-size: 16px;
    line-height: 1.78;
    font-size: 18px;
    color: #424242;
    margin-bottom: 68px;
  }

  h2 {
    margin-bottom: 24px;
    font-size: 28px;
  }

  .gatsby-highlight {
    margin-top: 13px;
    margin-bottom: 68px;
  }
`;

const GettingStartedPageTemplate = ({ data: { mdx }, location }) => (
  <Layout>
    <SEO
      title="Getting Started with Video.js - Video.js: The Player Framework"
    />
    <GettingStartedHero />
    <ContainerStyled>
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
    </ContainerStyled>
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
