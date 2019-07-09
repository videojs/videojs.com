import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero';
import Container from '../../components/Container';
import { H1, H2 } from '../../components/Typography';
import { media } from '../../utils/styles';

const StyledH2 = styled(H2)`
  letter-spacing: -0.01em;
  font-size: 24px;
  line-height: 1.5;
  max-width: 33em;
  margin: 0 auto;
`;

const StyledHero = styled(Hero)`
  background-position: center -425px;

  ${Container} {
    ${media.xlLarge`
      padding-top: 10em;
      padding-bottom: 10em;
    `}
  }
`;

const GettingStartedHero = () => (
  <StyledHero themeName="fantasy">
    <Container>
      <H1>Getting Started</H1>
      <StyledH2>
        An overview of how to get started using Video.js, from basic CDN
        usage to Browserify, along with examples.
      </StyledH2>
    </Container>
  </StyledHero>
);

export default GettingStartedHero;
