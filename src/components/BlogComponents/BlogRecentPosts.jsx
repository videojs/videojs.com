import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import { Link, StaticQuery, graphql } from 'gatsby';

import { extractNodes } from '../../utils/graphql';

const Wrapper = styled.div`
  border: 2px solid #ebebeb;
`;

const Heading = styled.h4`
  background-color: #f9f9f9;
  border-bottom: 2px solid #ebebeb;
  display: block;
  color: rgba(0, 0, 0, 0.3);
  font-size: 16px;
  padding: 1em 0;
  text-align: center;
  text-transform: uppercase;
`;

const Links = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 300;
  line-height: 1.88;
  padding: 2em;

  a {
    display: block;
    color: inherit;
    text-decoration: underline;

    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }
`;

const BlogRecentPosts = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allMdx(
          filter: {fileAbsolutePath: {regex: "/blog/"}}
          sort: {fields: [frontmatter___date], order: DESC}
          limit: 6
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
      const posts = extractNodes(data.allMdx)

      return (
        <Wrapper>
          <Heading>Recent Posts</Heading>
          <Links>
            {posts.map((post) => (
              <Link
                key={shortid.generate()}
                to={post.fields.slug}
              >
                {post.frontmatter.title}
              </Link>
            ))}
          </Links>
        </Wrapper>
      );
    }}
  />
);

export default BlogRecentPosts;
