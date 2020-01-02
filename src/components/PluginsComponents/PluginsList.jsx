import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import { StaticQuery, graphql } from 'gatsby';

import Container from '../Container';
import PluginsListItem from './PluginsListItem';
import { extractNodes } from '../../utils/graphql';

const Wrapper = styled.div`
  margin: 3.5em 0 10em;
`;

const PluginsList = () => (
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
    render={(data) => {
      const plugins = extractNodes(data.allPluginsJson);

      return (
        <Container>
          <Wrapper>
            {plugins.map((plugin) => (
              <PluginsListItem key={shortid.generate()} {...plugin} />
            ))}
          </Wrapper>
        </Container>
      );
    }}
  />
);

export default PluginsList;
