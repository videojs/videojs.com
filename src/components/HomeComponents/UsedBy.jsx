import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Image from '../Image';
import VideoWrapper from '../VideoWrapper';
import CustomerLogos from './CustomerLogos';

import PlayerExamples from './PlayerExamples';

import zigZag from '../../images/background-zig-zag.svg';

import LinkedInSvg from '../../images/linkedin.svg';
import TumblrSvg from '../../images/tumblr.svg';
import GuardianSvg from '../../images/guardian.svg';

const IGNLogo = () => <Image filename="ign.png" />;
const LinkedInLogo = () => <img src={LinkedInSvg} alt="LinkedIn" />;
const TumblrLogo = () => <img src={TumblrSvg} alt="Tumblr" />;
const GuardianLogo = () => <img src={GuardianSvg} alt="Guardian" />;

const UsedByWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.media.xLarge`
    background-image: url(${zigZag});
    background-repeat: no-repeat;
    background-position: calc(100% + 78px) 20%;
    background-size: auto 100px;
  `}
`;

const IGNPlayer = () => (
  <VideoWrapper>
    <iframe
      title="IGN Example Player"
      src="https://widgets.ign.com/video/embed/content.html?url=https://www.ign.com/videos/2019/06/12/cyberpunk-2077-our-thoughts-after-seeing-50-minutes-of-new-gameplay-e3-2019"
      scrolling="no"
      frameBorder="0"
      allowFullScreen
    />
  </VideoWrapper>
);

const TumblrVideoWrapper = styled.div`
  > iframe {
    margin: 0 auto !important;
  }
`;

class TumblrPlayer extends React.Component {
  componentDidMount() {
    if (document.getElementById('tumblr-script')) {
      console.log('already initialized');
    }
    const script = document.createElement('script');

    script.id = 'tumblr-script';
    script.src = 'https://assets.tumblr.com/post.js';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <TumblrVideoWrapper>
        <div
          className="tumblr-post"
          data-href="https://embed.tumblr.com/embed/post/XKYAwvd4SV0X6wvYA1JHIg/185698909902"
          data-did="da0759b79b948c9d5e9b9865cdf3b4e71c886c4d"
        >
          <a href="https://video-js.tumblr.com/post/185698909902/just-a-good-ol-big-buck-bunny-so-we-can-have-a">
            https://video-js.tumblr.com/post/185698909902/just-a-good-ol-big-buck-bunny-so-we-can-have-a
          </a>
        </div>
      </TumblrVideoWrapper>
    );
  }
}

const LinkedInPlayer = () => (
  <VideoWrapper>
    <iframe
      src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6545287331673366528?compact=1"
      allowFullScreen=""
      title="Embedded post"
      frameBorder="0"
    />
  </VideoWrapper>
);

const GuardianPlayer = () => (
  <VideoWrapper>
    <iframe
      src="https://embed.theguardian.com/embed/video/news/video/2015/jul/20/california-drought-eat-beef-wash-video"
      frameBorder="0"
      title="Guardian Embed"
      allowFullScreen
    />
  </VideoWrapper>
);


const UsedByContainer = styled(Container)`
  & {
    padding-top: 10em;

    ${({ theme }) => theme.media.xLarge`
      padding-top: 18.75em;
    `}
  }
`;

const StyledSectionHeader = styled(SectionHeader)`
  width: 90%;
  margin: 0 auto 3.5em;

  ${({ theme }) => theme.media.medLarge`
    width: 100%;
  `}
`;

const UsedBy = props => (
  <>
    <UsedByWrapper>
      <UsedByContainer>
        <StyledSectionHeader
          title="Used By"
          tagline="Built by the community, used by the professionals"
        />
        <PlayerExamples
          examples={[
            { name: 'IGN', embed: IGNPlayer, logo: IGNLogo },
            { name: 'Tumblr', embed: TumblrPlayer, logo: TumblrLogo },
            { name: 'LinkedIn', embed: LinkedInPlayer, logo: LinkedInLogo },
            { name: 'The Guardian', embed: GuardianPlayer, logo: GuardianLogo },
          ]}
        />
      </UsedByContainer>
    </UsedByWrapper>
    <CustomerLogos />
  </>
);

export default UsedBy;
