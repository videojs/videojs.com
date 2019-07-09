import React from 'react';
import styled from 'styled-components';

import Link from '../Link';
import { joinUrls } from '../../utils/url';
import { media } from '../../utils/styles';

const Wrapper = styled.aside`
  width: 24%;
  padding-right: 2.5em;

  > ul {
    margin-left: -3.5em;

    ${media.medLarge`
      margin-left: -6.25em;
    `}
  }

  ul {
    list-style-type: none;
    padding: 0;

    ul {
      li:last-child {
        margin-bottom: 1.3em;
      }

      a {
        color: #6b6b6b;
        font-weight: normal;
        padding: 0.4em 0.625em 0.4em 5.375em;
        margin: 0;
      }
    }

    a {
      display: inline-block;
      color: #000;
      font-weight: bold;
      line-height: 1;
      padding: 0.875em 1em 0.875em 3.5em;
      margin-bottom: 0.3em;

      &:hover {
        color: #a043b6;
      }

      &.active {
        background: #f3e5f7;
        color: #000;
      }
    }
  }
`;

const renderNavItems = (path, items) => (
  <ul>
    {items.map(item => (
      <li key={item.url}>
        {/* For some reason setting activeClassName does not work for links with hashes.
        So we need to define our custom function for checking if the link is active */}
        <Link
          getProps={({ location }) => {
            return (location.hash === item.url) && (location.pathname === path)
              ? { className: 'active' }
              : null;
          }}
          to={joinUrls(path, item.url)}
        >
          {item.title}
        </Link>
        {Array.isArray(item.items) && renderNavItems(path, item.items)}
      </li>
    ))}
  </ul>
);

const GettingStartedNav = ({ className, path, items }) => (
  <Wrapper className={className}>
    {renderNavItems(path, items)}
  </Wrapper>
);

export default GettingStartedNav;
