import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import SectionHeader from '../SectionHeader';
import { P, H3 } from '../Typography';
import Image from '../Image';

import diamonds from '../../images/background-diamonds.svg';

const FeaturesWrapper = styled.div`
  width: 100%;

  background-image: url(${diamonds});
  background-repeat: no-repeat;
  background-position: -266px 80%;
  background-size: auto 160px;
`;

const FeaturesContainer = styled(Container)`
  & {
    padding-top: 185px;
  }

  display: flex;
  width: 100%;
`;

const PrimaryText = styled.div`
  flex: 0 0 50%;
  padding-right: 156px;

  ${P} {
    line-height: 2.14;
  }
`;

const FeatureList = styled.div`
  padding-left: 20px;

  display: flex;
  flex: 0 0 50%;
  flex-flow: wrap;
  justify-content: space-between;
`;

const Feature = styled(props => (
  <div className={props.className}>
    <Image filename={props.image} />
    <H3>{props.title}</H3>
    <P>{props.text}</P>
  </div>
))`
  width: 250px;
  margin-top: 84px;

  ${H3} {
    padding-top: 53px;
    padding-bottom: 26px;
  }

  ${P} {
    font-size: 13px;
    margin-bottom: 0;
  }
`;

const Features = props => (
  <FeaturesWrapper>
    <FeaturesContainer>
      <PrimaryText>
        <SectionHeader left title="Features" tagline="Why Video.js?" />
        <P>
          Video.js is a web video player built from the ground up for an HTML5
          world. It supports HTML5 video and modern streaming formats, as well
          as YouTube, Vimeo, and even Flash (through plugins, more on that
          later).
        </P>

        <P>
          It supports video playback on desktop and mobile devices. The project
          was started mid 2010, and now has hundreds of contributors and is used
          on over 450,000 websites.
        </P>
      </PrimaryText>

      <FeatureList>
        <Feature
          title="Plays anything"
          image="plays-everything.svg"
          text="Plays “traditional” file formats such as MP4 and WebM, but also supports adaptive streaming formats such as HLS and DASH. There’s even a special UI for live streams!"
        />
        <Feature
          title="Easy to style"
          image="easy-to-style.svg"
          text="Video.js is designed to be a reliable and consistent base to build on top of. The player looks great out of the box, but can be easily styled with a little bit of extra CSS."
        />
        <Feature
          title="100s of plugins"
          image="100s-of-plugins.svg"
          text="When you need to add additional functionality, a well-documented plugin architecture has your back. The community has already built hundreds of skins and plugins that you can install, such as Chromecast, IMA, even VR."
        />
        <Feature
          title="Supported everywhere"
          image="supported-everywhere.svg"
          text="Your video should work everywhere your app does. The team makes an effort to support every modern browser we can, including desktop and mobile."
        />
      </FeatureList>
    </FeaturesContainer>
  </FeaturesWrapper>
);

export default Features;
