import React from 'react'

import Hero from '../Hero';
import Container from '../Container';
import { H1, H2 } from '../Typography';

const GettingStartedHero = () => (
  <Hero themeName="fantasy">
    <Container>
      <H1>Getting Started</H1>
      <H2>
        An overview of how to get started using Video.js, from basic CDN
        usage to Browserify, along with examples.
      </H2>
    </Container>
  </Hero>
)

export default GettingStartedHero
