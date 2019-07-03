import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';

import Container from '../../Container';
import PluginsListItem from './PluginsListItem';

const Wrapper = styled.div`
  margin: 3.5em 0 10em;
`;

const PluginsList = ({ plugins }) => (
  <Container>
    <Wrapper>
      {plugins.map((plugin) => (
        <PluginsListItem key={shortid.generate()} {...plugin} />
      ))}
    </Wrapper>
  </Container>
);

export default PluginsList;
