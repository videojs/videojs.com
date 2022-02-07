import React from 'react';
import { graphql } from 'gatsby';

import GuidesLayout from '../components/GuidesComponents/GuidesLayout';
import GuidesPost from '../components/GuidesComponents/GuidesPost';
import GuidesPagination from '../components/GuidesComponents/GuidesPagination';

const GuidesPostTemplate = ({
  data: { mdx },
  pageContext: { prevPost, nextPost },
}) => (
  <GuidesLayout seo={{ title: 'Video.js Guides' }}>
    <GuidesPost post={mdx} />
    <GuidesPagination
      prevLink={prevPost}
      prevLinkCaption="Prev post"
      nextLink={nextPost}
      nextLinkCaption="Next post"
    />
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
