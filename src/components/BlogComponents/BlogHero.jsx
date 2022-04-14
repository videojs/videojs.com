import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero';
import Container from '../../components/Container';
import { H2 } from '../../components/Typography';
import { theme } from '../../utils/styles';

const StyledHero = styled(Hero)`
  ${Container} {
    padding-bottom: 4em;
  }
  ${({ theme }) => theme.media.large`
    ${Container} {
      padding-bottom: 6em;
    }
  `}
  ${({ theme }) => theme.media.xlLarge`
    background-position: center -625px;
    ${Container} {
      padding-top: 10em;
      padding-bottom: 10em;
    }
  `}
`;

const StyledH2 = styled(H2)`
  font-size: 34px;
  line-height: 1em;
  font-weight: 500;
  ${({ theme }) => theme.media.medium`
    font-size: 56px;
    padding: 0;
  `}
  ${({ theme }) => theme.media.medLarge`
    font-size: 56px;
    padding: 0;
  `}
`;

const BlogHero = () => (
  <StyledHero theme={{...theme, currentTheme: theme.sea}}>
    <Container>
      <StyledH2>Video.js Blog</StyledH2>
    </Container>
  </StyledHero>
);

export default BlogHero;
