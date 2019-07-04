import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero';
import Container from '../../components/Container';
import { H1 } from '../../components/Typography';
import { media } from '../../utils/styles';

const StyledHero = styled(Hero)`
  background-position: center -670px;

  ${Container} {
    ${media.xlLarge`
      padding-top: 12em;
      padding-bottom: 12em;
    `}
  }
`;

const BlogHero = () => (
  <StyledHero themeName="sea">
    <Container>
      <H1>Video JS Blog</H1>
    </Container>
  </StyledHero>
);

export default BlogHero;
