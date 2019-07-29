import React from 'react';
import styled, { css } from 'styled-components';

import { H1, H2 } from './Typography';
import { media } from '../utils/styles';

const cssForProp = (prop, styles) => {
  if (!prop) return;

  return typeof prop === 'string'
    ? css`${media[prop]`${styles}`}`
    : css`${styles}`;
}

const SectionHeaderContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;

const SectionHeaderTitle = styled(H1)`
  display: block;
  font-family: ${props => props.theme.defaultSans};
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 16px;
  margin-bottom: 0.6em;
  color: ${props => props.theme.brand.lightGrey};
  text-align: center;

  ${({ leftText }) => cssForProp(leftText, `
    text-align: left;
  `)}
`;

const SectionHeaderTagline = styled(H2)`
  font-weight: bold;
  font-size: 30px;
  line-height: 1.4em;
  margin-bottom: 1em;
  text-align: center;
  position: relative;
  color: ${props => (props.darkMode ? '#fff' : 'inherit')};

  &:after {
    height: 3px;
    width: 70px;
    display: block;
    content: '';
    background-color: ${props => props.theme.brand.lightGrey};
    margin: 0.6em auto 0 auto;
    opacity: 0.5;
  }

  ${({ leftText }) => cssForProp(leftText, `
    text-align: left;

    &:after {
      margin-left: 0;
      margin-right: 0;
    }
  `)}

  ${({ leftLine }) => cssForProp(leftLine, `
    &:after {
      position: absolute;
      left: -100px;
      top: 0;
    }
  `)}
`;

const SectionHeader = ({ className, ...props }) => (
  <SectionHeaderContainer className={className} {...props}>
    <SectionHeaderTitle {...props}>{props.title}</SectionHeaderTitle>
    <SectionHeaderTagline {...props}>{props.tagline}</SectionHeaderTagline>
  </SectionHeaderContainer>
);

SectionHeader.defaultProps = {
  leftText: false,
  leftLine: false
}

export default SectionHeader;
