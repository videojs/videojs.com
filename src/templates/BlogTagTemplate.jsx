import React from 'react';
import shortid from 'shortid';
import { graphql } from 'gatsby';

import BlogLayout from '../components/BlogComponents/BlogLayout';
import BlogPost from '../components/BlogComponents/BlogPost';
import { extractNodes } from '../utils/graphql';

const BlogTagTemplate = ({ data: { allMdx } }) => {
  const posts = extractNodes(allMdx);

  return (
    <BlogLayout seo={{ title: 'Video.js Blog' }}>
      {posts.map((post) => (
        <BlogPost key={shortid.generate()} post={post} />
      ))}
    </BlogLayout>
  );
};

export default BlogTagTemplate;

export const blogTagQuery = graphql`
  query blogTagQuery ($tag: String!) {
    allMdx (
      filter: {
        fileAbsolutePath: { regex: "/blog/" },
        frontmatter: { tags: { in: [$tag] } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
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
`;
