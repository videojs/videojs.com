import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import SectionHeader from '../SectionHeader';
// import Image from '../Image';
// import VideoWrapper from '../VideoWrapper';
import UsedByLogos from './UsedByLogos';

// import PlayerExamples from './PlayerExamples';

import zigZag from '../../images/background-zig-zag.svg';

const UsedByWrapper = styled.section`
  width: 100%;

  ${({ theme }) => theme.media.xLarge`
    background-image: url(${zigZag});
    background-repeat: no-repeat;
    background-position: calc(100% + 78px) 20%;
    background-size: auto 100px;
  `}
`;

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
    <UsedByWrapper role="contentinfo" aria-label="Used By Professionals Demo">
      <UsedByContainer>
        <StyledSectionHeader
          title="Used By"
          tagline="Built by the community, used by the professionals"
        />
      </UsedByContainer>
    </UsedByWrapper>
    <UsedByLogos />
  </>
);

export default UsedBy;
