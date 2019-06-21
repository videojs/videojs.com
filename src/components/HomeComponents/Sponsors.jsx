import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import SectionHeader from '../SectionHeader';
import { P } from '../Typography';
import Image from '../Image';

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

const SponsorImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 4em;
`;

const Sponsor = styled(props => (
  <div className={props.className}>
    <SponsorImage>
      <Image filename={props.image} alt={props.name} />
    </SponsorImage>
    <div className="title">{props.title}</div>
  </div>
))`
  border: solid 2px #ebebeb;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin: 0 1em 100px 1em;

  .title {
    border-top: solid 2px #ebebeb;
    padding: 1.9em;
    text-align: center;
    letter-spacing: 1.4px;
    color: rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
  }
`;

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
        />
      </PrimaryContainer>

      <SponsorList>
        <Sponsor title="CDN" image="logos/fastly.svg" name="Fastly" />
        <Sponsor title="Website" image="logos/mux.svg" name="Mux" />
        <Sponsor
          title="Device Testing"
          image="logos/browserstack.svg"
          name="BrowserStack"
        />
        <Sponsor
          title="Static Hosting"
          image="logos/netlify.svg"
          name="Netlify"
        />
      </SponsorList>
    </SponsorsContainer>
  </SponsorsWrapper>
);

export default Sponsors;
