import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import BlogSidebarBlock from './BlogSidebarBlock';
import { extractNodes } from '../../utils/graphql';

const BlogRecentPosts = () => (
  <StaticQuery
    query={graphql`
      query blogRecentPosts {
        allMdx(
          filter: {fileAbsolutePath: {regex: "/blog/"}}
          sort: {fields: [frontmatter___date], order: DESC}
          limit: 5
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => {
     const posts = extractNodes(data.allMdx);

      return (
        <BlogSidebarBlock
          heading="Recent Posts"
          items={posts.map(post => ({
            url: post.fields.slug,
            label: post.frontmatter.title
          }))}
        />
      );
    }}
  />
);

export default BlogRecentPosts;
