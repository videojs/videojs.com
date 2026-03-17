import React from 'react';
import { graphql } from 'gatsby';

import BlogLayout from '../components/BlogComponents/BlogLayout';
import BlogPost from '../components/BlogComponents/BlogPost';
import BlogPagination from '../components/BlogComponents/BlogPagination';

const BlogPostTemplate = ({
  data: { mdx },
  pageContext: { prevPost, nextPost },
}) => (
  <BlogLayout seo={{
    title: 'Video.js Blog',
    link: [
      { rel: 'canonical', href: `https://videojs.org${mdx.fields.slug}` },
    ],
  }}>
    <BlogPost post={mdx} />
    <BlogPagination
      prevLink={prevPost}
      prevLinkCaption="Prev post"
      nextLink={nextPost}
      nextLinkCaption="Next post"
    />
  </BlogLayout>
);

export default BlogPostTemplate;

export const blogPostQuery = graphql`
  query blogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
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
`;
