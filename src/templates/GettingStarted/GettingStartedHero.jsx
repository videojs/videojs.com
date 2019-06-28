import React from 'react';

import Hero from '../../components/Hero';
import Container from '../../components/Container';
import { H1, H2 } from '../../components/Typography';
import styled from 'styled-components';

const H2Styled = styled(H2)`
  letter-spacing: -0.24px;
  font-size: 24px;
  line-height: 1.5;
  max-width: 750px;
  margin: 0 auto;
`

const GettingStartedHero = () => (
  <Hero themeName="fantasy">
    <Container>
      <H1>Getting Started</H1>
      <H2Styled>
        An overview of how to get started using Video.js, from basic CDN
        usage to Browserify, along with examples.
      </H2Styled>
    </Container>
  </Hero>
);

export default GettingStartedHero;
