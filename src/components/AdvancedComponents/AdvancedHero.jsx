import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero';
import Container from '../../components/Container';
import { H1, H2 } from '../../components/Typography';
import { theme } from '../../utils/styles';

const StyledH2 = styled(H2)`
  letter-spacing: -0.01em;
  font-size: 24px;
  line-height: 1.5;
  max-width: 33em;
  margin: 0 auto;
`;

const StyledHero = styled(Hero)`
  ${({ theme }) => theme.media.xlLarge`
    background-position: center -520px;

    ${Container} {
      padding-top: 10em;
      padding-bottom: 10em;
    }
  `}
`;

const AdvancedHero = () => (
  <StyledHero theme={{...theme, currentTheme: theme.city}}>
    <Container>
      <H1>Advanced Example</H1>
      <StyledH2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </StyledH2>
    </Container>
  </StyledHero>
);

export default AdvancedHero;
