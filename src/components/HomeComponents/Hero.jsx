import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Container from '../Container';
import Hero from '../Hero';
import Player from '../Player';
import ThemeSelector from '../ThemeSelector';
import { H1, H2 } from '../Typography';

const DemoContainer = styled.div`
  max-width: 710px;
  margin: 0 auto;
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

    ${Button} {
      border-radius: 0;
      width: 100%;
      margin: 0;
    }

    ${({ theme }) => theme.media.medium`
      padding: 0;
      flex: 1;
    `}
  }
`;

const HomeHero = props => (
  <Hero>
    <Container>
      <H1>Make your player yours</H1>
      <H2>with the worlds most popular open source HTML5 player</H2>

      <DemoContainer>
        {props.heroTheme && (
          <Player
            controls
            fluid
            themeName={props.heroTheme.name}
            sources={[
              { src: props.heroTheme.video, type: 'application/x-mpegurl' },
            ]}
            poster={props.heroTheme.poster}
          />
        )}
        <DemoControls>
          <Button>Get Started</Button>
          <Button>Demos</Button>
          <StyledThemeSelector
            changeTheme={props.changeTheme}
            currentTheme={props.heroTheme && props.heroTheme.name}
          >
            Swap Theme
          </StyledThemeSelector>
        </DemoControls>
      </DemoContainer>
    </Container>
  </Hero>
);

export default styled(HomeHero)``;
