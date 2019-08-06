import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import SectionHeader from '../SectionHeader';

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

  ${({ theme }) => theme.media.xLarge`
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

  ${({ theme }) => theme.media.medLarge`
    width: 80%;
  `}

  ${({ theme }) => theme.media.xLarge`
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
  border-top: 2px solid #f5f5f5;
  border-bottom: 2px solid #f5f5f5;
  font-weight: ${props => props.header && 'bold'};
  padding: 10px 5px;

  ${({ theme }) => theme.media.small`
    padding: 20px;
  `}

  ${({ theme }) => theme.media.medium`
    padding: 40px 60px;
  `}

  ${({ theme }) => theme.media.xLarge`
    border-left: 2px solid #f5f5f5;
    border-right: 2px solid #f5f5f5;
  `}
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

    ${({ theme }) => theme.media.xLarge`
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

    ${({ theme }) => theme.media.xLarge`
      padding-right: 2em;
    `}
  }

  ${({ theme }) => theme.media.xLarge`
    justify-content: flex-start;
  `}
`;

const SupportCell = props => (
  <TableCell {...props}>
    <SupportCellContent {...props}>{props.children}</SupportCellContent>
  </TableCell>
);

const TableHead = styled.thead`
  background-color: #e5e4e5;
  font-size: 18px;
  font-weight: bold;

  ${TableCell} {
    padding: 10px 5px;

    ${({ theme }) => theme.media.small`
      padding: 20px;
    `}

    ${({ theme }) => theme.media.medium`
      padding: 60px;
    `}
  }

  ${({ theme }) => theme.media.xLarge`
    background-color: #fff;
  `}
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
            <TableCell>Video.js</TableCell>
            <TableCell>HTML5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell header>Cross-browser "Skins"</TableCell>
            <SupportCell supported>
              Looks good everywhere with CSS-based Skins
            </SupportCell>
            <SupportCell>Looks different in every browser</SupportCell>
          </TableRow>
          <TableRow>
            <TableCell header>
              Adaptive Streaming (adjusting to the viewer’s bandwidth)
            </TableCell>
            <SupportCell supported>
              HLS supported everywhere. DASH supported everywhere but iOS
              Safari.
            </SupportCell>
            <SupportCell>
              HLS and DASH not playable in Chrome or Firefox by default.
            </SupportCell>
          </TableRow>
          <TableRow>
            <TableCell header>Social Video Platforms</TableCell>
            <SupportCell supported>
              Play Youtube, Vimeo, and more with added plugins.
            </SupportCell>
            <SupportCell>Not supported</SupportCell>
          </TableRow>
          <TableRow>
            <TableCell header>Community-built Plugins</TableCell>
            <SupportCell supported>Hundreds!</SupportCell>
            <SupportCell supported>Probably?</SupportCell>
          </TableRow>
          <TableRow>
            <TableCell header>Browser API Inconsistencies</TableCell>
            <SupportCell supported>Makes them disappear</SupportCell>
            <SupportCell>Many</SupportCell>
          </TableRow>
        </TableBody>
      </Table>
    </ImplementationContainer>
  </ImplementationWrapper>
);

export default Implementation;
