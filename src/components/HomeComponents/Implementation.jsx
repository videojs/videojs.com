import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Code from '../Code';
import { media } from '../../utils/styles';

import lines from '../../images/background-lines.svg';
import circles from '../../images/background-circles.svg';
import tick from '../../images/tick.svg';
import cross from '../../images/cross.svg';

const ImplementationWrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: #232323;
  padding-top: 110px;
  padding-bottom: 207px;

  ${media.xLarge`
    &::before {
      content: '';
      display: block;
      height: 525px;
      width: 110px;
      opacity: 0.2;
      position: absolute;

      background-image: url(${lines});
      background-repeat: no-repeat;
      background-position: 0px 110px;
      background-size: 110px 525px;
    }

    &::after {
      content: '';
      height: 620px;
      width: 235px;
      display: block;
      opacity: 0.2;

      position: absolute;
      top: -227px;
      right: 0;

      background-image: url(${circles});
    }
  `}
`;

const ImplementationContainer = styled(Container)`
  width: 92%;

  ${media.medLarge`
    width: 80%;
  `}

  ${media.xLarge`
    width: 75%;
  `}
`;

const Table = styled.table`
  background-color: #fff;
  margin-top: 6em;
  width: 100%;
`;

const TableRow = styled.tr``;
const TableCell = styled.td`
  border: 2px solid #f5f5f5;
  padding: 40px 10px;

  &:first-child {
    padding-left: 60px;
  }

  &:last-child {
    padding-right: 60px;
  }

  ${media.xLarge`
    padding: 40px 60px;
  `}

  font-weight: ${props => props.header && 'bold'};
`;

const SupportCellContent = styled((props) => (
  <div className={props.className}>
    <span>{props.children}</span>
  </div>
))`
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    display: none;

    ${media.xLarge`
      display: inline-block;
    `}
  }

  &::before {
    height: 28px;
    width: 28px;
    display: block;
    flex-shrink: 0;

    content: '';
    background-image: url(${props => (props.supported ? tick : cross)});
    background-repeat: no-repeat;

    ${media.xLarge`
      padding-right: 2em;
    `}
  }

  ${media.xLarge`
    justify-content: flex-start;
  `}
`;

const SupportCell = props => (
  <TableCell {...props}>
    <SupportCellContent {...props}>{props.children}</SupportCellContent>
  </TableCell>
);

const TableHead = styled.thead`
  font-size: 18px;
  font-weight: bold;

  ${TableCell} {
    padding: 60px 10px;
    max-width: 84px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:first-child {
      padding-left: 60px;
    }

    &:last-child {
      padding-right: 60px;
    }

    ${media.xLarge`
      max-width: unset;
      padding: 60px;
    `}
  }
`;

const TableBody = styled.tbody`
  font-size: 13px;
  color: #010101;
`;

const Implementation = () => (
  <ImplementationWrapper>
    <ImplementationContainer>
      <SectionHeader
        darkMode
        title="Implementation"
        tagline="When to use Video.js over the <video> element?"
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Feature</TableCell>
            <TableCell>
              <Code>video</Code> Element
            </TableCell>
            <TableCell>Video.js</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell header>Cross-browser "Skins"</TableCell>
            <SupportCell>Looks different in every browser</SupportCell>
            <SupportCell supported>
              Looks good everywhere with CSS-based Skins
            </SupportCell>
          </TableRow>
          <TableRow>
            <TableCell header>
              Adaptive Streaming (adjusting to the viewer’s bandwidth)
            </TableCell>
            <SupportCell>
              HLS and DASH not playable in Chrome or Firefox by default.
            </SupportCell>
            <SupportCell supported>
              HLS supported everywhere. DASH supported everywhere but iOS
              Safari.
            </SupportCell>
          </TableRow>
          <TableRow>
            <TableCell header>Social Video Platforms</TableCell>
            <SupportCell>Not supported</SupportCell>
            <SupportCell supported>
              Play Youtube, Vimeo, and more with added plugins.
            </SupportCell>
          </TableRow>
          <TableRow>
            <TableCell header>Community-built Plugins</TableCell>
            <SupportCell supported>Probably?</SupportCell>
            <SupportCell supported>Hundreds!</SupportCell>
          </TableRow>
          <TableRow>
            <TableCell header>Browser API Inconsistencies</TableCell>
            <SupportCell>Many</SupportCell>
            <SupportCell supported>Makes them disappear</SupportCell>
          </TableRow>
        </TableBody>
      </Table>
    </ImplementationContainer>
  </ImplementationWrapper>
);

export default Implementation;
