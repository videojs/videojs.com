import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Link from '../components/Link';
import GuidesLayout from '../components/GuidesComponents/GuidesLayout';
import GuidesView from '../components/GuidesComponents/GuidesView';

const BackBox = styled.div`
  background: #f5f2f0;
  padding: 0.5em 1em;
  margin: 0 0 1em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.91667;
`;

const GuidesViewTemplate = ({
  data: { mdx }
}) => (
  <GuidesLayout seo={{ title: 'Video.js Guides' }}>
    <BackBox>
      <Link href="/guides">Back to Guides</Link>
    </BackBox>
    <GuidesView guide={mdx} />
  </GuidesLayout>
);

export default GuidesViewTemplate;

export const guidesViewQuery = graphql`
  query guidesViewQuery($id: String!) {
    mdx(id: { eq: $id }) {
      tableOfContents
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
`;
