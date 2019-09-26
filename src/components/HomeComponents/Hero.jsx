import React from 'react';
import styled from 'styled-components';
import Link from '../Link';

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

const PlayerPlaceholder = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  background-color: #a9a9a9;
`;

const HomeHero = props => (
  <Hero>
    <Container>
      <H1>Make your player yours</H1>
      <H2>with the world's most popular open source HTML5 player framework</H2>

      <DemoContainer>
        {props.heroTheme.video ? (
          <Player
            controls
            themeName={props.heroTheme.name}
            sources={[
              { src: props.heroTheme.video, type: 'application/x-mpegurl' },
            ]}
            poster={props.heroTheme.poster}
          />
        ) : (
          <PlayerPlaceholder />
        )}
        <DemoControls>
          <Button as={Link} to="/getting-started">
            Get Started
          </Button>
          <Button as={Link} to="/advanced">
            Demos
          </Button>
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
