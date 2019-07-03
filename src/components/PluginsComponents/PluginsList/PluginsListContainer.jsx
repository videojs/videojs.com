import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PluginsList from './PluginsList';
import { extractNodes } from '../../../utils/graphql';

const PluginsListContainer = () => (
  <StaticQuery
    query={graphql`
      query {
         allPluginsJson {
          edges {
            node {
              name
              version
              downloads
              description
            }
          }
        }
      }
    `}
    render={data => <PluginsList plugins={extractNodes(data.allPluginsJson)} />}
  />
);

export default PluginsListContainer;
