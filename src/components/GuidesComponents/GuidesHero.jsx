import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero';
import Container from '../../components/Container';
import { H1, H2 } from '../../components/Typography';
import { theme } from '../../utils/styles';

const StyledHero = styled(Hero)`
  ${Container} {
    padding-bottom: 2.5em;
  }
  ${({ theme }) => theme.media.xlLarge`
    background-position: center -670px;

    ${Container} {
      padding-top: 12em;
      padding-bottom: 12em;
    }
  `}
`;

const GuidesHero = () => (
  <StyledHero theme={{...theme, currentTheme: theme.sea}}>
    <Container>
      <H1>Video.js Guides</H1>
      <H2>These guides cover a range of topics for users of Video.js</H2>
    </Container>
  </StyledHero>
);

export default GuidesHero;
