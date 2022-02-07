import React from 'react';
import shortid from 'shortid';
import { graphql } from 'gatsby';

import GuidesLayout from '../components/GuidesComponents/GuidesLayout';
import GuidesPost from '../components/GuidesComponents/GuidesPost';
import { extractNodes } from '../utils/graphql';

const GuidesTagTemplate = ({ data: { allMdx } }) => {
  const posts = extractNodes(allMdx);

  return (
    <GuidesLayout seo={{ title: 'Video.js Guides' }}>
      {posts.map(post => (
        <GuidesPost key={shortid.generate()} post={post} />
      ))}
    </GuidesLayout>
  );
};

export default GuidesTagTemplate;

export const guidesTagQuery = graphql`
  query guidesTagQuery($tag: String!) {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/guides/" }
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
            date(formatString: "YYYY-MM-DD")
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
