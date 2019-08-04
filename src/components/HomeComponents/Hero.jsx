import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Container from '../Container';
import Hero from '../Hero';
import Player from '../Player';
import ThemeSelector from '../ThemeSelector';
import { H1, H2 } from '../Typography';
import { media } from '../../utils/styles';

const DemoContainer = styled.div`
  max-width: 710px;
  margin: 0 auto;
`;

const DemoControls = styled.div`
  background-color: #fff;
  padding: 2em;
  width: 100%;
  display: flex;

  ${media.medium`
    padding: 2.5em 2em;
  `}

  & > * {
    flex: 1;
  }

  ${Button} {
    font-size: 14px;
    margin-bottom: 1em;
    padding: 1em 1.5em;

    &:last-child {
      margin-bottom: 0;
    }

    ${media.medium`
      margin: 0 0.6em;
    `}
  }

  ${ThemeSelector} {
    padding: 0;
  }
`;

const HomeHero = props => (
  <Hero themeName={props.themeName}>
    <Container>
      <H1>Make your player yours</H1>
      <H2>with the worlds most popular open source HTML5 player</H2>

      <DemoContainer>
        <Player
          controls
          fluid
          sources={[{ src: props.video, type: 'application/x-mpegurl' }]}
          poster={props.poster}
        />
        <DemoControls>
          <Button>Get Started</Button>
          <Button>Demos</Button>
          <ThemeSelector style={{ marginLeft: '4em' }}>
            Swap Theme
          </ThemeSelector>
        </DemoControls>
      </DemoContainer>
    </Container>
  </Hero>
);

export default styled(HomeHero)``;
