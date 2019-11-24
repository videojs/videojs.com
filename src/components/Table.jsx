import React from 'react';
import styled from 'styled-components';

import tick from '../images/tick.svg';
import cross from '../images/cross.svg';

export const Table = styled.table`
  background-color: #fff;
  margin-top: 6em;
  width: 100%;
`;

export const TableRow = styled.tr``;
export const TableCell = styled.td`
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

export const TableHead = styled.thead`
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

export const TableBody = styled.tbody`
  font-size: 13px;
  color: #010101;
`;

export const SupportCellContent = styled(props => (
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

export const SupportCell = props => (
  <TableCell {...props}>
    <SupportCellContent {...props}>{props.children}</SupportCellContent>
  </TableCell>
);
