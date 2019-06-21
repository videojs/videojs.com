import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import SectionHeader from '../SectionHeader';

import lines from '../../images/background-lines.svg';
import circles from '../../images/background-circles.svg';

const ImplementationWrapper = styled.div`
  width: 100%;
  position: relative;

  background-image: url(${lines});
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

    background-image: url(${circles});
    background-repeat: no-repeat;
    background-position: 0px 0px;
    background-size: auto;
  }
`;

const ImplementationContainer = styled(Container)`
  & {
    padding-top: 410px;
  }

  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Implementation = () => (
  <ImplementationWrapper>
    <ImplementationContainer>
      <SectionHeader title="Implementation" />
    </ImplementationContainer>
  </ImplementationWrapper>
);

export default Implementation;
