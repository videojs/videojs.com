import React from 'react';
import Slugger from 'github-slugger';
import { MDXProvider } from '@mdx-js/react';

const SluggerContext = React.createContext();

const AutoLinkHeader = ({ as: Component, children, ...props }) => (
  <SluggerContext.Consumer>
    {slugger => (
      <Component id={slugger.slug(children)} {...props}>
        {children}
      </Component>
    )}
  </SluggerContext.Consumer>
);

const buildHeaderComponent = tag => props =>
  <AutoLinkHeader as={tag} {...props} />;

const AutoLinkH1 = buildHeaderComponent('h1');
const AutoLinkH2 = buildHeaderComponent('h2');
const AutoLinkH3 = buildHeaderComponent('h3');
const AutoLinkH4 = buildHeaderComponent('h4');
const AutoLinkH5 = buildHeaderComponent('h5');
const AutoLinkH6 = buildHeaderComponent('h6');

const tagsToReplaceWithAutoLinks = {
  h1: AutoLinkH1,
  h2: AutoLinkH2,
  h3: AutoLinkH3,
  h4: AutoLinkH4,
  h5: AutoLinkH5,
  h6: AutoLinkH6,
};

const WithAutoLinkHeaders = ({ children }) => (
  <SluggerContext.Provider value={new Slugger()}>
    <MDXProvider components={tagsToReplaceWithAutoLinks}>
      {children}
    </MDXProvider>
  </SluggerContext.Provider>
)

export default WithAutoLinkHeaders;
