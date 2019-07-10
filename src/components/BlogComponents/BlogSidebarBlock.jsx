import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import shortid from 'shortid';

import Link from '../Link';

const Wrapper = styled.div`
  border: 2px solid #ebebeb;
  margin-bottom: 3.3em;
`;

const Heading = styled.h4`
  background-color: #f9f9f9;
  border-bottom: 2px solid #ebebeb;
  display: block;
  color: rgba(0, 0, 0, 0.3);
  font-size: 16px;
  padding: 1em 0;
  text-align: center;
  text-transform: uppercase;
`;

const Links = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 300;
  line-height: 1.88;
  padding: 2em;

  a {
    display: block;
    color: inherit;
    text-decoration: underline;

    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }
`;

const BlogSidebarBlock = ({ heading, items }) => (
  <Wrapper>
    <Heading>{heading}</Heading>
    <Links>
      {items.map(({ url, label }) => (
        <Link key={shortid.generate()} to={url}>
          {label}
        </Link>
      ))}
    </Links>
  </Wrapper>
);

BlogSidebarBlock.propTypes = {
  heading: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default BlogSidebarBlock;
