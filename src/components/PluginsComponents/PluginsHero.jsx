import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero';
import Container from '../../components/Container';
import { H2 } from '../../components/Typography';
import { theme } from '../../utils/styles';

const StyledHero = styled(Hero)`
  ${Container} {
    padding-bottom: 2.5em;
  }
  ${({ theme }) => theme.media.medium`
    ${Container} {
      padding-bottom: 3.5em;
    }
  `}
  ${({ theme }) => theme.media.large`
    ${Container} {
      padding-bottom: 6em;
    }
  `}
  ${({ theme }) => theme.media.xlLarge`
    background-position: center -425px;
    ${Container} {
      padding-top: 10em;
      padding-bottom: 13em;
    }
  `}
`;

const StyledCode = styled.code`
  white-space: nowrap;
`

const StyledH2 = styled(H2)`
  font-size: 34px;
  line-height: 1em;
  margin-bottom: 1.5em;
  font-weight: 500;
  ${({ theme }) => theme.media.medium`
    font-size: 56px;
    margin-bottom: 1.1em;
    padding: 0;
  `}
  ${({ theme }) => theme.media.medLarge`
    font-size: 56px;
    margin-bottom: 0.3em;
    padding: 0;
  `}
`;

const Subheading = styled.p`
  font-size: 20px;
  line-height: 1.4em;
  font-weight: 100;
  max-width: 33em;
  margin: 0 auto 1em;
  text-align: center;
  color: #fff;
  padding: 0 1em;
  &:last-of-type {
    margin-bottom: 0;
  }
  ${({ theme }) => theme.media.small`
    font-size: 22px;
  `}
  ${({ theme }) => theme.media.medLarge`
    padding: 0;
  `}
`;

const PluginsHero = () => (
  <StyledHero theme={{...theme, currentTheme: theme.forest}}>
    <Container>
      <StyledH2>Plugins and Skins</StyledH2>
      <Subheading>
        To show up here, mark your plugin or your skin with
        the <StyledCode>videojs-plugin</StyledCode> or <StyledCode>videojs-skin</StyledCode> keywords.
      </Subheading>
      <Subheading>
        You can customize Video.js using 3rd party plugins and skins. For more
        information about creating and using Video.js extensions, please see the
        documentation.
      </Subheading>
    </Container>
  </StyledHero>
);

export default PluginsHero;
