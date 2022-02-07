import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import GuidesLayout from '../components/GuidesComponents/GuidesLayout';
import GuidesPost from '../components/GuidesComponents/GuidesPost';
import GuidesPagination from '../components/GuidesComponents/GuidesPagination';
import GuidesTags from '../components/GuidesComponents/GuidesTags';
import GuidesRecentPosts from '../components/GuidesComponents/GuidesRecentPosts';
import { extractNodes } from '../utils/graphql';

const BottomPanels = styled.div`
  ${({ theme }) => theme.media.medLarge`
    display: none;
  `}
`

const GuidesListTemplate = ({
  data: { allMdx },
  pageContext: { prevPage, nextPage },
}) => {
  const posts = extractNodes(allMdx);

  return (
    <GuidesLayout seo={{ title: 'Video.js Guides' }}>
      {posts.map(post => (
        <GuidesPost key={shortid.generate()} post={post} />
      ))}
      <BottomPanels>
        <GuidesTags />
        <GuidesRecentPosts />
      </BottomPanels>
      <GuidesPagination
        prevLink={prevPage}
        prevLinkCaption="Prev page"
        nextLink={nextPage}
        nextLinkCaption="Next page"
      />
    </GuidesLayout>
  );
};

export default GuidesListTemplate;

export const guidesListQuery = graphql`
  query guidesListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/guides/" } }
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
          code {
            body
          }
        }
      }
    }
  }
`;
