import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';

const MAX_DEPTH = 3;

const TocListItem = ({ item, depth, maxDepth }) => {
  return (
    <li>
      <a href={item.url}>{item.title}</a>
      <TocList items={item.items} depth={depth + 1} maxDepth={maxDepth} />
    </li>
  );
};

const TocList = ({ items, depth, maxDepth }) => {
  if (!Array.isArray(items) || !items.length || depth > maxDepth) {
    return null;
  }

  return (
    <ul>
      {items.map(item => <TocListItem key={shortid.generate()} item={item} depth={depth} maxDepth={maxDepth} />)}
    </ul>
  );
};

const TocWrapper = styled.div`
  background: #f5f2f0;
  padding: 0.5em 1em;
  margin: 1em 0;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.91667;

  ul {
    margin: 0 0 0 1em;
  }

  a {
    color: #750075;
    font-weight: 400;
  }

  a:hover, a:active {
    text-decoration: underline;
  }
`;

const TableOfContents = ({ contents }) => {
  if (!Array.isArray(contents.items) || !contents.items.length) {
    return null;
  }

  return (
    <TocWrapper>
      <h2>Table of Contents</h2>
      <TocList items={contents.items} depth={1} maxDepth={MAX_DEPTH} />
    </TocWrapper>
  );
};

export default TableOfContents;
