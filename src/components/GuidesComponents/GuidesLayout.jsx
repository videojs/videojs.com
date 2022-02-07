import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../Layout';
import SEO from '../SEO';
import Container from '../Container';
import GuidesHero from './GuidesHero';
import GuidesTags from './GuidesTags';
import GuidesRecentPosts from './GuidesRecentPosts';

const StyledContainer = styled(Container)`
  margin-top: 2em;
  ${({ theme }) => theme.media.medLarge`
    margin: 7em 0 0 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  `}
`;

const PostWrapper = styled.div`
  margin: 0 2em;
  ${({ theme }) => theme.media.medLarge`
    padding-right: 3em;
    margin: 0;
    width: 74%;
  `}
`;

const Sidebar = styled.aside`
  display: none;
  ${({ theme }) => theme.media.medLarge`
    display: block;
    width: 19%;
  `}
`;

const GuidesLayout = ({ children, seo }) => (
  <Layout>
    <SEO {...seo} />
    <GuidesHero />
    <StyledContainer>
      <Sidebar>
        <GuidesTags />
        <GuidesRecentPosts />
      </Sidebar>
      <PostWrapper>
        {children}
      </PostWrapper>
    </StyledContainer>
  </Layout>
);

GuidesLayout.defaultProps = {
  seo: {},
};

GuidesLayout.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.object,
};

export default GuidesLayout;
