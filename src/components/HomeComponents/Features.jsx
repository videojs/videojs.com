import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Image from '../Image';
import { P, H3 } from '../Typography';

import diamonds from '../../images/background-diamonds.svg';

const FeaturesWrapper = styled.section`
  width: 100%;

  ${({ theme }) => theme.media.xLarge`
    background-image: url(${diamonds});
    background-repeat: no-repeat;
    background-position: -266px 80%;
    background-size: auto 160px;
  `}
`;

const FeaturesContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & {
    padding-top: 4.8em;

    ${({ theme }) => theme.media.xLarge`
      padding-top: 11.57em;
    `}
  }
`;

const PrimaryText = styled.div`
  flex: 0 0 65%;
  margin: 0 auto;

  ${({ theme }) => theme.media.xLarge`
    flex-basis: 50%;
    padding-right: 156px;
  `}

  ${P} {
    line-height: 2.14;
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex: 0 0 100%;
  flex-flow: wrap;
  justify-content: space-between;

  ${({ theme }) => theme.media.xLarge`
    flex-basis: 50%;
  `}
`;

const Feature = styled(props => (
  <div className={props.className}>
    <span>
      <Image filename={props.image} alt={props.alt} />
      <H3>{props.title}</H3>
      <P>{props.text}</P>
    </span>
  </div>
))`
  flex: 0 0 100%;
  margin-top: 84px;

  > span {
    display: block;
    margin: 0 auto;
    width: 250px;
    text-align: center;

    ${({ theme }) => theme.media.xLarge`
      text-align: left;
    `}
  }

  ${({ theme }) => theme.media.medLarge`
    flex-basis: 50%;
  `}

  ${H3} {
    padding-top: 53px;
    padding-bottom: 26px;
  }

  ${P} {
    font-size: 13px;
    margin-bottom: 0;
    text-align: center;

    ${({ theme }) => theme.media.xLarge`
      text-align: left;
    `}
  }
`;

const Features = props => (
  <FeaturesWrapper role="contentinfo" aria-label="Features">
    <FeaturesContainer>
      <PrimaryText>
        <SectionHeader
          mobileAlign="left"
          tabletAlign="left"
          desktopAlign="left"
          title="Features"
          tagline="Why Video.js?"
        />
        <P>
          Video.js is the open-source HTML5 video player for the modern web:
          embed html5 video easily, support all major formats, and style it your way.
        </P>

        <P>
          It supports video playback on desktop and mobile devices. The project
          was started mid 2010, and now has hundreds of contributors and has been used
          on over 3,000,000 websites.
        </P>
      </PrimaryText>

      <FeatureList>
        <Feature
          title="Plays anything"
          alt="abstract player illustration"
          image="plays-everything.svg"
          text="Plays “traditional” file formats such as MP4 and WebM, but also supports adaptive streaming formats such as HLS and DASH. There’s even a special UI for live streams!"
        />
        <Feature
          title="Easy to style"
          alt="stylized abstract pencil"
          image="easy-to-style.svg"
          text="Video.js is designed to be a reliable and consistent base to build on top of. The player looks great out of the box, but can be easily styled with a little bit of extra CSS."
        />
        <Feature
          title="100s of plugins"
          alt="abstract collection of checkboxes"
          image="100s-of-plugins.svg"
          text="When you need to add additional functionality, a well-documented plugin architecture has your back. The community has already built hundreds of skins and plugins that you can install, such as Chromecast, IMA, even VR."
        />
        <Feature
          title="Supported everywhere"
          alt="abstract players of various sizes"
          image="supported-everywhere.svg"
          text="Your video should work everywhere your app does. The team makes an effort to support every modern browser we can, including desktop and mobile."
        />
      </FeatureList>
    </FeaturesContainer>
  </FeaturesWrapper>
);

export default Features;
