import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import shortid from 'shortid';

import GuidesLayout from '../components/GuidesComponents/GuidesLayout';
import GuidesCategory from '../components/GuidesComponents/GuidesCategory';
import { extractNodes } from '../utils/graphql';

const CATEGORY_NAMES = {
  advanced: 'Advanced Topics',
  basics: 'Getting Started',
  general: 'General Usage',
  integrations: 'Integrations',
  tracks: 'Tracks'
};

const CATEGORY_ORDER = [
  'basics',
  'general',
  'advanced',
  'integrations',
  'tracks'
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GuidesListTemplate = ({
  data: { allMdx },
}) => {
  const categories = allMdx.group.map(g => {
    return {
      id: g.fieldValue,
      name: CATEGORY_NAMES[g.fieldValue],
      guides: extractNodes(g).sort()
    };
  }).sort((a, b) => {
    return CATEGORY_ORDER.indexOf(a.id) - CATEGORY_ORDER.indexOf(b.id);
  });

  return (
    <GuidesLayout seo={{ title: 'Video.js Guides' }}>
      <Container>
        {categories.map(category => (
          <GuidesCategory key={shortid.generate()} category={category}></GuidesCategory>
        ))}
      </Container>
    </GuidesLayout>
  );
};

export default GuidesListTemplate;

export const guidesListQuery = graphql`
  query guidesListQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/guides/" } }
      sort: { fields: [frontmatter___order, frontmatter___title], order: ASC }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              category
            }
            code {
              body
            }
          }
        }
      }
    }
  }
`;
