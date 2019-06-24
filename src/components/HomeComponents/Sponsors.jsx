import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import SectionHeader from '../SectionHeader';
import { P } from '../Typography';
import Image from '../Image';
import TitleBox from '../TitleBox';

import triangles from '../../images/background-triangles.svg';
import vine from '../../images/background-vine.svg';

const SponsorsWrapper = styled.div`
  width: 100%;
  position: relative;

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
`;

const SponsorsContainer = styled(Container)`
  & {
    padding-top: 410px;
  }

  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const PrimaryContainer = styled.div`
  display: flex;
`;

const PrimaryText = styled.div`
  flex: 0 0 50%;
  padding-right: 156px;

  ${P} {
    font-size: 16px;
    line-height: 1.88;
  }
`;

const SponsorList = styled.div`
  display: flex;
  flex: 1 0 22%;
`;

const Sponsor = props => (
  <TitleBox title={props.title} url={props.url}>
    <Image filename={props.image} alt={props.name} />
  </TitleBox>
);

const Sponsors = props => (
  <SponsorsWrapper>
    <SponsorsContainer>
      <PrimaryContainer>
        <PrimaryText>
          <SectionHeader
            left
            title="Sponsors"
            tagline="The folks who help make this happen"
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
          name="Brightcove"
          url="https://brightcove.com"
        />
      </PrimaryContainer>

      <SponsorList>
        <Sponsor
          title="CDN"
          image="logos/fastly.svg"
          name="Fastly"
          url="https://fastly.com"
        />
        <Sponsor
          title="Website"
          image="logos/mux.svg"
          name="Mux"
          url="https://mux.com"
        />
        <Sponsor
          title="Device Testing"
          image="logos/browserstack.svg"
          name="BrowserStack"
          url="https://browserstack.com"
        />
        <Sponsor
          title="Static Hosting"
          image="logos/netlify.svg"
          name="Netlify"
          url="https://netlify.com"
        />
      </SponsorList>
    </SponsorsContainer>
  </SponsorsWrapper>
);

export default Sponsors;
