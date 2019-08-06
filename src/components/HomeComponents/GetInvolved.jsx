import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import Image from '../Image';
import SectionHeader from '../SectionHeader';
import TitleBox from '../TitleBox';

import dots from '../../images/background-dots.svg';
import leaves from '../../images/background-leaves.svg';

const Wrapper = styled.div`
  position: relative;

  ${({ theme }) => theme.media.xLarge`
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 650px;
      left: 150px;
      width: 100px;
      height: 670px;
      background-image: url(${dots});
      background-repeat: no-repeat;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 500px;
      right: 0;
      width: 500px;
      height: 100px;
      background-image: url(${leaves});
      background-repeat: no-repeat;
      background-size: 1000px 80px;
    }
  `}
`;

const StyledContainer = styled(Container)`
  padding-top: 6em;

  ${({ theme }) => theme.media.xLarge`
    padding-top: 11em;
    padding-bottom: 11em;
  `}
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SlackBox = styled(({ className }) => (
  <div className={className}>
    <TitleBox
      title="video js slack"
      bgColor="#4a154b"
      borderColor="#4a154b"
      textColor="#fff"
      textBorderColor="#000"
    >
      <Image filename="logos/slack.svg" alt="slack logo" />
    </TitleBox>
  </div>
))`
  flex: 0 0 90%;
  margin: 0 auto;

  ${({ theme }) => theme.media.xLarge`
    flex: 0 0 40%;
    margin: 0;
  `}
`;

const DemuxedLogoWrapper = styled.span`
  display: flex;
  align-items: center;
  height: 170px;

  ${({ theme }) => theme.media.xLarge`
    height: 270px;
  `}
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
))`
  ${({ theme }) => theme.media.xLarge`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 200%;
  `}
`;

const StyledSectionHeader = styled(SectionHeader)`
  margin: 0 auto 6em;
  flex: 0 0 70%;

  ${({ theme }) => theme.media.xLarge`
    flex: 0 0 40%;
    margin: 0;
  `}
`;

const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;

  ${({ theme }) => theme.media.xLarge`
    justify-content: center;
    width: 60%;
  `}
`;

const BoxWrapper = styled.div`
  flex: 0 0 100%;

  ${({ theme }) => theme.media.medium`
    flex: 0 0 48%;
  `}

  ${({ theme }) => theme.media.xLarge`
    flex: 0 0 40%;
    margin: 0 1.5em;
    position: relative;
  `}
`;

const GetInvolved = () => (
  <Wrapper>
    <StyledContainer>
      <HeaderWrapper>
        <StyledSectionHeader
          mobileAlign="left"
          tabletAlign="center"
          desktopAlign="left"
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
    </StyledContainer>
  </Wrapper>
);

export default GetInvolved;
