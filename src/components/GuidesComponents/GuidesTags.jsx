import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import GuidesSidebarBlock from './GuidesSidebarBlock';

const TAGS_NUM = 7;

const extractTags = tagGroups =>
  tagGroups.map(({ fieldValue }) => fieldValue);

const GuidesTags = () => (
  <StaticQuery
    query={graphql`
      query guidesTags {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/blog/" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 5
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data) => {
      const tags = extractTags(data.allMdx.group);

      return (
        <GuidesSidebarBlock
          heading="Tags"
          items={tags.slice(0, TAGS_NUM).map(tag => ({
            url: `/tags/${tag}`,
            label: tag
          }))}
        />
      );
    }}
  />
);

export default GuidesTags;
