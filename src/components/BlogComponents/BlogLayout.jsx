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
  display: flex;
  justify-content: space-between;
  margin-top: 7em;
`;

const PostWrapper = styled.div`
  width: 74%;
  padding-right: 3em;
`;

const Sidebar = styled.aside`
  width: 19%;
`;

const BlogLayout = ({ children, seo }) => (
  <Layout>
    <SEO {...seo} />
    <BlogHero />
    <StyledContainer>
      <PostWrapper>
        {children}
      </PostWrapper>
      <Sidebar>
        <BlogTags />
        <BlogRecentPosts />
      </Sidebar>
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
