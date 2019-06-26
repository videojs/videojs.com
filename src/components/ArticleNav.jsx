import React from 'react';
import { Link } from 'gatsby';

import { joinUrls } from '../utils/url'

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
              : null
          }}
          to={`/${joinUrls(path, item.url)}`}
        >
          {item.title}
        </Link>
        {Array.isArray(item.items) && renderNavItems(path, item.items)}
      </li>
    ))}
  </ul>
);

const ArticleNav = ({ className, path, items }) => (
  <div className={className}>{renderNavItems(path, items)}</div>
);

export default ArticleNav;
