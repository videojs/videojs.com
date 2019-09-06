import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero';
import Container from '../../components/Container';
import { H1 } from '../../components/Typography';
import { theme } from '../../utils/styles';

const StyledHero = styled(Hero)`
  ${({ theme }) => theme.media.xlLarge`
    background-position: center -670px;

    ${Container} {
      padding-top: 12em;
      padding-bottom: 12em;
    }
  `}
`;

const BlogHero = () => (
  <StyledHero theme={{...theme, currentTheme: theme.sea}}>
    <Container>
      <H1>Video JS Blog</H1>
    </Container>
  </StyledHero>
);

export default BlogHero;
