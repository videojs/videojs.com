import React from 'react';
import { graphql } from 'gatsby';

import GuidesLayout from '../components/GuidesComponents/GuidesLayout';
import GuidesPost from '../components/GuidesComponents/GuidesPost';

const GuidesPostTemplate = ({
  data: { mdx }
}) => (
  <GuidesLayout seo={{ title: 'Video.js Guides' }}>
    <GuidesPost post={mdx} />
  </GuidesLayout>
);

export default GuidesPostTemplate;

export const guidesPostQuery = graphql`
  query guidesPostQuery($id: String!) {
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
      code {
        body
      }
    }
  }
`;
