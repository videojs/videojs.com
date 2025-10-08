import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from '../Link';

import Button from '../Button';
import Container from '../Container';
import Hero from '../Hero';
import Player from '../Player';
import ThemeSelector from '../ThemeSelector';
import { H2 } from '../Typography';

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

const growingBar = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(100%);
  }
`;

const DemoControls = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: relative;

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

  &:before {
    content: '';
    display: ${props => (props.transitionDuration ? 'block' : 'none')};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${props => props.theme.currentTheme.color};
    animation: ${growingBar} ${props => props.transitionDuration}s;
  }
`;

const PlayerPlaceholder = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  background-color: #a9a9a9;
`;

const HomeHero = props => (
  <Hero role="contentinfo" aria-label="Videojs hero demo">
    <Container>

      <H2>Make your player yours <span>with the world's most popular open source HTML5 video player</span></H2>

      <DemoContainer>
        {props.heroTheme.video ? (
          <Player
            controls
            themeName={props.heroTheme.name}
            sources={[
              { src: props.heroTheme.video, type: 'application/x-mpegurl' },
            ]}
            poster={props.heroTheme.poster}
            enableDocumentPictureInPicture='true'
            onPlay={props.onPlay}
            playsInline
          />
        ) : (
          <PlayerPlaceholder />
        )}
        <DemoControls
          key={props.heroTheme.name}
          transitionDuration={props.transitionDuration}
        >
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

export default HomeHero;
