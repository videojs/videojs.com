import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import Button from '../Button';
import Container from '../Container';
import Hero from '../Hero';
import ThemeSelector from '../ThemeSelector';
import { H1, H2 } from '../Typography';

const DemoContainer = styled.div`
  max-width: 710px;
  margin: 0 auto;
`;

// Player placeholder
const Player = styled.div`
  background-color: ${props => lighten(0.15, props.theme.currentTheme.color)};
  width: 100%;
  height: 377px;
`;

const StyledThemeSelector = styled(ThemeSelector)`
  && {
    ${({ theme }) => theme.media.medium`
      margin-left: 4em;
    `}
  }
`;

const DemoControls = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  ${({ theme }) => theme.media.medium`
    padding: 2.5em 2em;
  `}

  & > * {
    flex: 1;
  }

  ${Button} {
    font-size: 14px;
    margin: 1em;
    padding: 1em 1.5em;
    flex: 0 0 50%;

    &:last-child {
      margin-bottom: 0;
    }

    ${({ theme }) => theme.media.medium`
      margin: 0 0.6em;
      flex: 1;
    `}
  }

  ${StyledThemeSelector} {
    border-radius: 0;
    flex: 0 0 100%;
    margin: 0;

    ${({ theme }) => theme.media.medium`
      margin: 0 0.6em 0 4em;
      padding: 0;
      flex: 1;
    `}
  }
`;

const HomeHero = props => (
  <Hero themeName={props.themeName}>
    <Container>
      <H1>Make your player yours</H1>
      <H2>with the worlds most popular open source HTML5 player</H2>

      <DemoContainer>
        <Player />
        <DemoControls>
          <Button>Get Started</Button>
          <Button>Demos</Button>
          <StyledThemeSelector>
            Swap Theme
          </StyledThemeSelector>
        </DemoControls>
      </DemoContainer>
    </Container>
  </Hero>
);

export default styled(HomeHero)``;
