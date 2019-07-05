import React from 'react';
import { graphql } from 'gatsby';

import BlogLayout from '../components/BlogComponents/BlogLayout';
import BlogPost from '../components/BlogComponents/BlogPost';

const BlogPostTemplate = ({ data: { mdx } }) => (
  <BlogLayout seo={{ title: 'Video.js Blog' }}>
    <BlogPost post={mdx} />
  </BlogLayout>
);

export default BlogPostTemplate;

export const blogPostQuery = graphql`
  query blogPostQuery ($id: String!) {
    mdx (id: { eq: $id }) {
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
`
