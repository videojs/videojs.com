import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import BlogLayout from '../components/BlogComponents/BlogLayout';
import BlogPost from '../components/BlogComponents/BlogPost';
import BlogPagination from '../components/BlogComponents/BlogPagination';
import BlogTags from '../components/BlogComponents/BlogTags';
import BlogRecentPosts from '../components/BlogComponents/BlogRecentPosts';
import { extractNodes } from '../utils/graphql';

const BottomPanels = styled.div`
  ${({ theme }) => theme.media.medLarge`
    display: none;
  `}
`

const BlogListTemplate = ({
  data: { allMdx },
  pageContext: { prevPage, nextPage },
}) => {
  const posts = extractNodes(allMdx);

  return (
    <BlogLayout seo={{ title: 'Video.js Blog' }}>
      {posts.map(post => (
        <BlogPost key={shortid.generate()} post={post} />
      ))}
      <BottomPanels>
        <BlogTags />
        <BlogRecentPosts />
      </BottomPanels>
      <BlogPagination
        prevLink={prevPage}
        prevLinkCaption="Prev page"
        nextLink={nextPage}
        nextLinkCaption="Next page"
      />
    </BlogLayout>
  );
};

export default BlogListTemplate;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            author {
              name
              github
            }
          }
          body
        }
      }
    }
  }
`;
