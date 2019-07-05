import React from 'react';
import shortid from 'shortid';
import { graphql } from 'gatsby';

import BlogLayout from '../components/BlogComponents/BlogLayout';
import BlogPost from '../components/BlogComponents/BlogPost';
import { extractNodes } from '../utils/graphql';

const BlogListTemplate = ({ data: { allMdx } }) => {
  const posts = extractNodes(allMdx);

  return (
    <BlogLayout seo={{ title: 'Video.js Blog' }}>
      {posts.map((post) => (
        <BlogPost key={shortid.generate()} post={post} />
      ))}
    </BlogLayout>
  );
};

export default BlogListTemplate;

export const blogListQuery = graphql`
  query blogListQuery ($skip: Int!, $limit: Int!) {
    allMdx (
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
            date (formatString: "YYYY-MM-DD")
            author {
              name
              github
            }
          }
          code {
            body
          }
        }
      }
    }
  }
`
