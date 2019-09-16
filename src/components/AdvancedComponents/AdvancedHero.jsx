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
  <StyledHero theme={{ ...theme, currentTheme: theme.city }}>
    <Container>
      <H1>Advanced Example</H1>
      <StyledH2>
        The advanced example includes the playlist plugin, along with some
        useful details such as what all of the player properties are, and what
        events have fired and how often.
      </StyledH2>
    </Container>
  </StyledHero>
);

export default AdvancedHero;
