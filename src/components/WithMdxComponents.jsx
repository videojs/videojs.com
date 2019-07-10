import React from 'react';
import Slugger from 'github-slugger';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';

import Link from './Link';
import { joinUrls } from '../utils/url';

const Context = React.createContext();

const StyledLinkIcon = styled(({ className }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="16"
    version="1.1"
    viewBox="0 0 16 16"
    width="16"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
    />
  </svg>
))`
  visibility: hidden;
`;

const StyledLink = styled(Link)`
  float: left;
  margin-left: -20px;
  color: inherit;
  text-decoration: none;
`;

const StyledHeader = styled(({ as: Component, className, children, ...props }) => (
  <Component className={className} {...props}>
    {children}
  </Component>
))`
  &:hover ${StyledLinkIcon} {
    visibility: visible;
  }
`;

const getStringChild = (children) => {
  if (typeof children === 'string') {
    return children;
  } else if (Array.isArray(children)) {
    for (let child of children) {
      const strChild = getStringChild(child);
      if (strChild) {
        return strChild;
      }
    }
  } else if ('props' in children) {
    return getStringChild(children.props.children);
  }
};

const AutoLinkHeader = ({ as, className, children, ...props }) => (
  <Context.Consumer>
    {({ slugger, contentSlug }) => {
      const id = slugger.slug(getStringChild(children));

      return id ? (
        <StyledHeader as={as} id={id} {...props}>
          <StyledLink to={joinUrls(contentSlug, `#${id}`)}>
            <StyledLinkIcon />
          </StyledLink>
          {children}
        </StyledHeader>
      ) : (
        <StyledHeader as={as} {...props}>
          {children}
        </StyledHeader>
      );
    }}
  </Context.Consumer>
);

const buildHeaderComponent = tag => props =>
  <AutoLinkHeader as={tag} {...props} />;

const AutoLinkH1 = buildHeaderComponent('h1');
const AutoLinkH2 = buildHeaderComponent('h2');
const AutoLinkH3 = buildHeaderComponent('h3');
const AutoLinkH4 = buildHeaderComponent('h4');
const AutoLinkH5 = buildHeaderComponent('h5');
const AutoLinkH6 = buildHeaderComponent('h6');

const isExternalUrl = url =>
  /^(?:(?:https?)|(?:mailto)|(?:ftp)|(?:tel)):/.test(url);

const MdxLink = ({ children, href, ...props }) => {
  const linkProps = { ...props };

  if (isExternalUrl(href)) {
    Object.assign(linkProps, {
      href,
      target: '_blank',
      rel: 'noopener noreferrer',
    });
  } else {
    Object.assign(linkProps, { to: href });
  }

  return (
    <Link {...linkProps}>{children}</Link>
  );
};

const componentsToReplace = {
  h1: AutoLinkH1,
  h2: AutoLinkH2,
  h3: AutoLinkH3,
  h4: AutoLinkH4,
  h5: AutoLinkH5,
  h6: AutoLinkH6,
  a: MdxLink,
};

const WithMdxComponents = ({ contentSlug, children }) => (
  <Context.Provider value={{ slugger: new Slugger(), contentSlug }}>
    <MDXProvider components={componentsToReplace}>
      {children}
    </MDXProvider>
  </Context.Provider>
)

export default WithMdxComponents;
