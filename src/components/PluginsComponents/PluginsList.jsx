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

const ContentWrapper = styled.div`
  display: block;
  border: 0.125em solid #ebebeb;
  margin-bottom: 2.5em;
`;
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.56em 2.1em;
`;
const Name = styled.h3`
  color: #000;
  font-size: 18px;
`;
const Info = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.05em;
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
            <ContentWrapper>
              <Heading>
                <Name>Total Plugins Found:</Name>
                <Info>{plugins.length}</Info>
              </Heading>
            </ContentWrapper>
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
