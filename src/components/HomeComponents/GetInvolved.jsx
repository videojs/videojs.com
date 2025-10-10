import React from 'react';
import styled, { css } from 'styled-components';

import Container from '../Container';
import Image from '../Image';
import SectionHeader from '../SectionHeader';
import TitleBox from '../TitleBox';

import dots from '../../images/background-dots.svg';
import leaves from '../../images/background-leaves.svg';

const Wrapper = styled.section`
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

  ${({ theme }) => theme.media.medLarge`
    padding-top: 6em
  `}

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

  ${({ theme }) => css`
    ${theme.media.medLarge`
      width: 90%;
      margin: 0 auto;
    `}

    ${theme.media.xLarge`
      width: 100%;
      margin: 0;
    `}
  `}
`;

const SlackCard = styled(({ className }) => (
  <div className={className}>
    <TitleBox
      title="video js slack"
      bgColor="#4a154b"
      borderColor="#4a154b"
      textColor="#fff"
      textBorderColor="#000"
      url="https://slack.videojs.com"
    >
      <Image filename="logos/slack.svg" alt="slack logo" />
    </TitleBox>
  </div>
))`
  flex: 0 0 90%;
  margin: 0 auto;

  ${({ theme }) => theme.media.medLarge`
    flex: 0 0 46%;
    margin: 0;
  `}

  ${({ theme }) => theme.media.xLarge`
    flex: 0 0 40%;
  `}
`;

const DemuxedCard = styled(({ className }) => (
  <div className={className}>
    <DemuxedBox />
  </div>
))`
  display: none;
  flex: 0 0 46%;
  margin: 0;

  ${({ theme }) => css`
    ${theme.media.medLarge`
      display: block;
    `}

    ${theme.media.xLarge`
      display: none;
    `}
  `}
`;

const DemuxedLogoWrapper = styled.span`
  display: flex;
  align-items: center;
  height: 170px;

  ${({ theme }) => theme.media.medLarge`
    height: 150px;
  `}

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
    url="https://demuxed.com"
  >
    <DemuxedLogoWrapper>
      <Image filename="logos/demuxed.svg" alt="demuxed logo" />
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

  ${({ theme }) => theme.media.medLarge`
    flex: 0 0 30%;
  `}

  ${({ theme }) => theme.media.xLarge`
    flex: 0 0 40%;
    margin: 0 1.5em;
    position: relative;
  `}
`;

const DemuxedBoxWrapper = styled(BoxWrapper)`
  display: block;

  ${({ theme }) => theme.media.medLarge`
    display: none;
  `}

  ${({ theme }) => theme.media.xLarge`
    display: block;
  `}
`;

const GetInvolved = () => (
  <Wrapper role="contentinfo" aria-label="Get Involved">
    <StyledContainer>
      <HeaderWrapper>
        <StyledSectionHeader
          mobileAlign="left"
          tabletAlign="center"
          desktopAlign="left"
          title="Get involved"
          tagline="We make it easy for anyone to jump in and be a part of the Video.js community."
        />
        <DemuxedCard />
        <SlackCard />
      </HeaderWrapper>
      <Boxes>
        <BoxWrapper>
          <TitleBox title="Video-dev / #Videojs" url="https://video-dev.org">
            <Image filename="video-dev.svg" alt="video-dev logo" />
          </TitleBox>
        </BoxWrapper>
        <BoxWrapper>
          <TitleBox title="Video js twitter" url="https://twitter.com/videojs" rel="noopener noreferrer">
            <Image filename="videojs-twitter.svg" alt="videojs twitter logo" />
          </TitleBox>
        </BoxWrapper>
        <BoxWrapper>
          <TitleBox
            title="Code of conduct"
            url="https://github.com/videojs/video.js/blob/main/CODE_OF_CONDUCT.md"
          >
            <Image filename="code-of-conduct.svg" alt="code of conduct logo" />
          </TitleBox>
        </BoxWrapper>
        <DemuxedBoxWrapper>
          <DemuxedBox />
        </DemuxedBoxWrapper>
      </Boxes>
    </StyledContainer>
  </Wrapper>
);

export default GetInvolved;
