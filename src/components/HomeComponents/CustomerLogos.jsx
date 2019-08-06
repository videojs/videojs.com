import React from 'react';
import styled, { css } from 'styled-components';

import FutureLearnLogo from '../../images/logos/futureLearn';
import LinkedinLogo from '../../images/logos/linkedin';
import PBSKidsLogo from '../../images/logos/pbsKids';
import BrightcoveLogo from '../../images/logos/brightcove';
import SAPLogo from '../../images/logos/sap';
import DropboxLogo from '../../images/logos/dropbox';
import USStateDepartmentSealLogo from '../../images/logos/usStateDepartmentSeal';
import ConsumerReportsLogo from '../../images/logos/consumerReports';
import AWGELogo from '../../images/logos/awge';
import SouthernLivingLogo from '../../images/logos/southernLiving';
import SeriousEatsLogo from '../../images/logos/seriousEats';
import CourseraLogo from '../../images/logos/coursera';
import UdemyLogo from '../../images/logos/udemy';
import TumblrLogo from '../../images/logos/tumblr';
import AmazonLogo from '../../images/logos/amazon';
import IGNLogo from '../../images/logos/ign';
import RallySoftwareLogo from '../../images/logos/rallySoftware';
import OnionLogo from '../../images/logos/onion';

const LogosRow = styled.div`
  display: flex;
  flex: 0 0 100%;
  align-items: center;
  justify-content: space-around;

  &:not(:first-child) {
    margin-top: 2em;
  }

  ${({ mobileOnly }) => mobileOnly && css`
    ${({ theme }) => theme.media.medLarge`
      display: none;
    `}
  `}
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 0 0 3em;
  align-items: center;
  justify-content: center;

  > svg {
    max-width: 100%;
  }

  ${({ theme }) => theme.media.small`
    flex: 0 0 5em;
  `}

  ${({ theme }) => theme.media.xLarge`
    flex: 0 0 7em;
  `}

  ${({ theme }) => theme.media.wide`
    flex: 0 0 10em;
  `}

  ${({ desktopOnly }) => desktopOnly && css`
    display: none;

    ${({ theme }) => theme.media.medLarge`
      display: flex;
    `}
  `}
`

const LogosBlock = styled(({ className }) => (
  <div className={className}>
    <LogosRow>
      <LogoWrapper><FutureLearnLogo /></LogoWrapper>
      <LogoWrapper><LinkedinLogo /></LogoWrapper>
      <LogoWrapper><PBSKidsLogo /></LogoWrapper>
      <LogoWrapper><BrightcoveLogo /></LogoWrapper>
      <LogoWrapper desktopOnly><SAPLogo /></LogoWrapper>
      <LogoWrapper desktopOnly><DropboxLogo /></LogoWrapper>
      <LogoWrapper desktopOnly><USStateDepartmentSealLogo /></LogoWrapper>
      <LogoWrapper desktopOnly><ConsumerReportsLogo /></LogoWrapper>
      <LogoWrapper desktopOnly><AWGELogo /></LogoWrapper>
    </LogosRow>
    <LogosRow mobileOnly>
      <LogoWrapper><SAPLogo /></LogoWrapper>
      <LogoWrapper><DropboxLogo /></LogoWrapper>
      <LogoWrapper><USStateDepartmentSealLogo /></LogoWrapper>
      <LogoWrapper><ConsumerReportsLogo /></LogoWrapper>
      <LogoWrapper><AWGELogo /></LogoWrapper>
    </LogosRow>
    <LogosRow>
      <LogoWrapper><SouthernLivingLogo /></LogoWrapper>
      <LogoWrapper><SeriousEatsLogo /></LogoWrapper>
      <LogoWrapper><CourseraLogo /></LogoWrapper>
      <LogoWrapper><UdemyLogo /></LogoWrapper>
      <LogoWrapper><TumblrLogo /></LogoWrapper>
      <LogoWrapper desktopOnly><AmazonLogo /></LogoWrapper>
      <LogoWrapper desktopOnly><IGNLogo /></LogoWrapper>
      <LogoWrapper desktopOnly><RallySoftwareLogo /></LogoWrapper>
      <LogoWrapper desktopOnly><OnionLogo /></LogoWrapper>
    </LogosRow>
    <LogosRow mobileOnly>
      <LogoWrapper><AmazonLogo /></LogoWrapper>
      <LogoWrapper><IGNLogo /></LogoWrapper>
      <LogoWrapper><RallySoftwareLogo /></LogoWrapper>
      <LogoWrapper><OnionLogo /></LogoWrapper>
    </LogosRow>
  </div>
))`
  display: inline-block;
  width: 50%;
`;

const CustomerLogos = styled(({ className }) => (
  <div className={className}>
    <div>
      <LogosBlock />
      <LogosBlock />
    </div>
  </div>
))`
  margin-top: 5em;
  overflow: hidden;

  > div {
    animation: rotate 30s linear infinite;
    width: 200%;
  }
`;

export default CustomerLogos;
