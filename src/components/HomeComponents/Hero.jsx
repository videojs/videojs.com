import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import Button from '../Button';
import Container from '../Container';
import ThemeSelector from '../ThemeSelector';
import { H1, H2 } from '../Typography';
import { media } from '../../utils/styles';

const HeroWrapper = styled.div`
  text-align: center;
  background-color: ${props => props.theme[props.themeName].color};
  background-image: url(${props => props.theme[props.themeName].image});
  background-repeat: no-repeat;
  background-position: center top;
  color: #fff;

  ${H1} {
    font-size: 34px;
    line-height: 1em;
    margin-bottom: 0.3em;
    text-align: center;

    ${media.medium`
      font-size: 56px;
      line-height: 1em;
      margin-bottom: 0.3em;
    `}

    ${media.medLarge`
      font-size: 56px;
      line-height: 1em;
      margin-bottom: 0.3em;
    `}
  }

  ${H2} {
    font-family: ${props => props.theme.defaultSans};
    font-size: 20px;
    line-height: 1.4em;
    margin-bottom: 0.8em;
    text-align: center;

    ${media.small`
      font-size: 22px;
      margin-bottom: 1.2em;
      line-height: 1.4em;
    `}

    ${media.large`
      margin-bottom: 2.4em;
    `}
  }

  ${Container} {
    padding-top: 6em;

    ${media.medLarge`
      padding-top: 8em;
    `}

    ${media.xlLarge`
      padding-top: 10em;
      padding-bottom: 20em;
    `}
  }
`;

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

const Hero = props => (
  <HeroWrapper themeName={props.themeName}>
    <Container>
      <H1>Make your player yours</H1>
      <H2>with the worlds most popular open source HTML5 player</H2>

      <DemoContainer>
        <Player />
        <DemoControls>
          <Button>Get Started</Button>
          <Button>Demos</Button>
          <ThemeSelector style={{ marginLeft: '4em' }}>
            Swap Theme
          </ThemeSelector>
        </DemoControls>
      </DemoContainer>
    </Container>
  </HeroWrapper>
);

export default styled(Hero)``;
