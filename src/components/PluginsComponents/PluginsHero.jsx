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
  background-position: center -520px;

  ${Container} {
    ${media.xlLarge`
      padding-top: 10em;
      padding-bottom: 10em;
    `}
  }
`;

const PluginsHero = () => (
  <StyledHero themeName="forrest">
    <Container>
      <H1>Plugins and Skins</H1>
      <StyledH2>
        You can customize Video.js using 3rd party plugins and skins. For more
        information about creating and using Video.js extensions, please see
        the documentation.
      </StyledH2>
    </Container>
  </StyledHero>
);

export default PluginsHero;
