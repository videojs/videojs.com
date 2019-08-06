import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import UpArrow from '../images/up-arrow.svg';

const StyledButton = styled(Button)`
  border: none;
  max-width: none;
  background-color: ${props => props.theme.currentTheme.color};
  color: #fff;
  padding: 1em;

  ${props => props.theme.media.medium`
    margin-left: 5em;
    background-color: #fff;
    color: ${props.theme.currentTheme.color};
    padding: 0;
  `}

  &:hover {
    ${({ theme }) => theme.media.medium`
      background-color: #fff;
      color: ${props => props.theme.currentTheme.color};
      opacity: 0.5;
    `}
  }
`;

const Circle = styled.span`
  display: inline-block;
  vertical-align: middle;
  border-radius: 100px;
  margin-left: 0.6em;
  width: 40px;
  height: 40px;
  content: '';
  background-image: url(${UpArrow});
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.2;
    border-radius: 50%;
  }

  ${({ theme }) => theme.media.medium`
    background-color: ${props => props.theme.currentTheme.color};

    &::before {
      display: none;
    }
  `}
`;

const ThemeSelector = styled(({ className, children }) => (
  <StyledButton className={className}>
    {children}
    <Circle />
  </StyledButton>
))``;

export default ThemeSelector;
