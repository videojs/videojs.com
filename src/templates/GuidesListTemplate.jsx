import React from 'react';
import shortid from 'shortid';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import GuidesLayout from '../components/GuidesComponents/GuidesLayout';
import GuidesListItem from '../components/GuidesComponents/GuidesListItem';
import { extractNodes } from '../utils/graphql';

const GuidesList = styled.ul`
  list-style: none;
`;

const GuidesListTemplate = ({
  data: { allMdx },
}) => {
  const guides = extractNodes(allMdx);

  return (
    <GuidesLayout seo={{ title: 'Video.js Guides' }}>
      <GuidesList>
        {guides.map(guide => (
          <GuidesListItem key={shortid.generate()} guide={guide} />
        ))}
      </GuidesList>
    </GuidesLayout>
  );
};

export default GuidesListTemplate;

export const guidesListQuery = graphql`
  query guidesListQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/guides/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          code {
            body
          }
        }
      }
    }
  }
`;
