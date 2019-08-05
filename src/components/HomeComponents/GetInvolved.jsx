import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import Image from '../Image';
import SectionHeader from '../SectionHeader';
import TitleBox from '../TitleBox';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const SlackBox = styled(({ className }) => (
  <TitleBox
    className={className}
    title="video js slack"
    bgColor="#4a154b"
    borderColor="#4a154b"
    textColor="#fff"
    textBorderColor="#000"
  >
    <Image filename="logos/slack.svg" alt="slack logo" />
  </TitleBox>
))`
  flex: 0 0 40%;
`;

const DemuxedLogoWrapper = styled.span`
  display: flex;
  align-items: center;
  height: 170px;
`;

const DemuxedBox = styled(({ className }) => (
  <TitleBox
    className={className}
    title="Demuxed conference"
    bgColor="#2d1c46"
    borderColor="#2d1c46"
    textColor="#fff"
    textBorderColor="#000"
  >
    <DemuxedLogoWrapper>
      <Image filename="logos/demuxed.svg" alt="demuxed logo"/>
    </DemuxedLogoWrapper>
  </TitleBox>
))``;

const StyledSectionHeader = styled(SectionHeader)`
  flex: 0 0 40%;
  margin: 0;
`;

const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 65%;
  margin: 0 auto;
`;

const BoxWrapper = styled.div`
  flex: 0 0 40%;
  margin: 0 1.5em;
`;

const GetInvolved = () => (
  <Container>
    <HeaderWrapper>
      <StyledSectionHeader
        leftText
        leftLine
        title="Get involved"
        tagline="We make it easy for anyone to jump in and be a part of the Video.js community."
      />
      <SlackBox />
    </HeaderWrapper>
    <Boxes>
      <BoxWrapper>
        <TitleBox title="Video-dev / #Videojs">
          <Image filename="video-dev.svg" alt="video-dev logo"/>
        </TitleBox>
      </BoxWrapper>
      <BoxWrapper>
        <TitleBox title="Video js twitter">
          <Image filename="videojs-twitter.svg" alt="videojs twitter logo"/>
        </TitleBox>
      </BoxWrapper>
      <BoxWrapper>
        <TitleBox title="Code of conduct">
          <Image filename="code-of-conduct.svg" alt="code of conduct logo"/>
        </TitleBox>
      </BoxWrapper>
      <BoxWrapper>
        <DemuxedBox />
      </BoxWrapper>
    </Boxes>
  </Container>
);

export default GetInvolved;
