import React from 'react';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import styled from 'styled-components';

import WithMdxComponents from '../WithMdxComponents';
import VideoWrapper from '../VideoWrapper';
import TableOfContents from '../TableOfContents';

const Article = styled.div`
  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
  }

  h4 {
    font-size: 20px;
  }

  h5, h6 {
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1em;
  }

  p, ul {
    color: #424242;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.78;
    margin-bottom: 2em;
  }

  ul, ol {
    margin-left: 1em;
  }

  blockquote {
    border-left: 0.25em solid #dfe2e5;
    padding: 0 1em;
  }

  .gatsby-highlight {
    margin-bottom: 2.25em;
  }

  .note {
    background-color: #f9f9f9;
    padding: 1em;
    margin-bottom: 2em;
  }

  .note :last-child {
    margin-bottom: 0;
  }

  table {
    margin-bottom: 2em;
  }

  th, td {
    padding: 1em;
    border: 2px solid #ebebeb;
  }

  th {
    background-color: #f9f9f9;
    color: rgba(0, 0, 0, 0.3);
    text-align: center;
    text-transform: uppercase;
  }

  ${VideoWrapper} {
    margin-bottom: 3em;
  }
`;

const GuidesView = ({ guide: { tableOfContents, frontmatter, body, fields } }) => (
  <>
    <h1>{frontmatter.title}</h1>
    <TableOfContents contents={tableOfContents} />
    <Article>
      <WithMdxComponents contentSlug={fields.slug}>
        <MDXRenderer>{body}</MDXRenderer>
      </WithMdxComponents>
    </Article>
  </>
);

GuidesView.propTypes = {
  guide: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    body: PropTypes.string.isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default GuidesView;
