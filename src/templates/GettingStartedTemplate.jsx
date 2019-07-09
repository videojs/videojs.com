import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import GettingStartedHero from '../components/GettingStartedComponents/GettingStartedHero';
import GettingStartedNav from '../components/GettingStartedComponents/GettingStartedNav';
import GettingStartedArticle from '../components/GettingStartedComponents/GettingStartedArticle';
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

const GettingStartedPageTemplate = ({ data: { mdx }, location }) => (
  <Layout>
    <SEO
      title="Getting Started with Video.js - Video.js: The Player Framework"
    />
    <GettingStartedHero />
    <StyledContainer>
      <MainContentWrapper>
        <GettingStartedNav
          path={location.pathname}
          items={mdx.tableOfContents.items}
        />
        <GettingStartedArticle mdxData={mdx} />
      </MainContentWrapper>
    </StyledContainer>
  </Layout>
);

export default GettingStartedPageTemplate;

export const pageQuery = graphql`
  query GettingStartedPage($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
      code {
        body
      }
      tableOfContents
    }
  }
`;
