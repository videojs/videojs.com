import React from 'react';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';

import WithMdxComponents from '../WithMdxComponents';
import VideoWrapper from '../VideoWrapper';

const Text = styled.div`
  h1 {
    font-size: 28px;
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

  ${VideoWrapper} {
    margin-bottom: 3em;
  }
`;

const GuidesView = ({ post: { frontmatter, code, fields } }) => (
  <Text>
    <h1>{frontmatter.title}</h1>
    <WithMdxComponents contentSlug={fields.slug}>
      <MDXRenderer>{code.body}</MDXRenderer>
    </WithMdxComponents>
  </Text>
);

GuidesView.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    code: PropTypes.shape({
      body: PropTypes.string.isRequired,
    }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default GuidesView;
