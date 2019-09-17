import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Image from '../Image';
import TitleBox from '../TitleBox';
import { P } from '../Typography';

import triangles from '../../images/background-triangles.svg';
import vine from '../../images/background-vine.svg';

const SponsorsWrapper = styled.div`
  width: 100%;
  position: relative;

  ${({ theme }) => theme.media.xLarge`
    background-image: url(${triangles});
    background-repeat: no-repeat;
    background-position: 0px 132px;
    background-size: auto 126px;

    &::after {
      content: '';
      height: 390px;
      width: 390px;
      display: block;

      position: absolute;
      top: 0;
      right: 0;

      background-image: url(${vine});
      background-repeat: no-repeat;
      background-position: 0px 0px;
      background-size: auto;
    }
  `}
`;

const SponsorsContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & {
    padding-top: 8.125em;

    ${({ theme }) => theme.media.xLarge`
      padding-top: 25.625em;
    `}
  }
`;

const Sponsor = styled(props => (
  <div className={props.className}>
    <TitleBox className={props.className} title={props.title} url={props.url}>
      <Image filename={props.image} alt={props.name} />
    </TitleBox>
  </div>
))`
  flex: 0 0 48%;

  ${({ theme }) => theme.media.medLarge`
    flex: 0 0 22%;
  `}
`;

const PrimaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${Sponsor} {
    flex: 0 0 90%;
    margin-left: auto;
    margin-right: auto;

    ${({ theme }) => theme.media.medLarge`
      flex: 0 0 60%;
    `}

    ${({ theme }) => theme.media.xLarge`
      flex: 0 0 50%;
    `}
  }
`;

const PrimaryText = styled.div`
  flex: 0 0 70%;
  margin: 0 auto;

  ${({ theme }) => theme.media.medLarge`
    flex: 0 0 60%;
  `}

  ${({ theme }) => theme.media.xLarge`
    flex: 0 0 50%;
    padding-right: 156px;
  `}

  ${P} {
    font-size: 16px;
    line-height: 1.88;
  }
`;

const SponsorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

const Sponsors = props => (
  <SponsorsWrapper>
    <SponsorsContainer>
      <PrimaryContainer>
        <PrimaryText>
          <SectionHeader
            title="Sponsors"
            tagline="The folks who help make this happen"
            mobileAlign="left"
            tabletAlign="left"
            desktopAlign="left"
          />
          <P>
            Brightcove is the main sponsor of the project, employing many of the
            core members and investing thousands of engineering hours every year
            in Video.js and Video.js plugins.
          </P>

          <P>
            The Brightcove Player is built on Video.js and used on thousands of
            video websites, ensuring Video.js can handle the most professional
            use cases.
          </P>
        </PrimaryText>

        <Sponsor
          title="Corporate Shepherd"
          image="logos/brightcove.svg"
          name="Brightcove - Online Video Platform | Video Hosting"
          url="https://brightcove.com"
        />
      </PrimaryContainer>

      <SponsorList>
        <Sponsor
          title="CDN"
          image="logos/fastly.svg"
          name="Fastly - CDN"
          url="https://fastly.com"
        />
        <Sponsor
          title="Website"
          image="logos/mux.svg"
          name="Mux - Video API"
          url="https://mux.com"
        />
        <Sponsor
          title="Device Testing"
          image="logos/browserstack.svg"
          name="BrowserStack - Browser Testing"
          url="https://browserstack.com"
        />
        <Sponsor
          title="Static Hosting"
          image="logos/netlify.svg"
          name="Netlify - Website Hosting"
          url="https://netlify.com"
        />
      </SponsorList>
    </SponsorsContainer>
  </SponsorsWrapper>
);

export default Sponsors;
