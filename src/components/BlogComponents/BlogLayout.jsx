import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../Layout';
import SEO from '../SEO';
import Container from '../Container';
import BlogHero from './BlogHero';
import BlogTags from './BlogTags';
import BlogRecentPosts from './BlogRecentPosts';

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

const BlogLayout = ({ children, seo }) => (
  <Layout>
    <SEO {...seo} />
    <BlogHero />
    <StyledContainer>
      <Sidebar>
        <BlogTags />
        <BlogRecentPosts />
      </Sidebar>
      <PostWrapper>
        {children}
      </PostWrapper>
    </StyledContainer>
  </Layout>
);

BlogLayout.defaultProps = {
  seo: {},
};

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.object,
};

export default BlogLayout;
