import React from 'react';
import styled, { css } from 'styled-components';

import { H1, H2 } from './Typography';

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
  color: ${props =>
    props.darkMode
      ? props.theme.brand.lightGrey
      : props.theme.brand.lightGreyText};

  ${({ theme, mobileAlign, tabletAlign, desktopAlign }) => css`
    text-align: ${mobileAlign};

    ${theme.media.medLarge`
      text-align: ${tabletAlign};
    `}

    ${theme.media.xLarge`
      text-align: ${desktopAlign};
    `}
  `}
`;

const getLineMarginLeft = align => (align === 'left' ? '0' : 'auto');

const SectionHeaderTagline = styled(H2)`
  font-weight: bold;
  font-size: 30px;
  line-height: 1.4em;
  margin-bottom: 1em;
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

  ${({ theme, mobileAlign, tabletAlign, desktopAlign }) => {
    let styles = css`
      text-align: ${mobileAlign};

      ${theme.media.medLarge`
        text-align: ${tabletAlign};
      `}

      ${theme.media.xLarge`
        text-align: ${desktopAlign};
      `}

      &::after {
        margin-left: ${getLineMarginLeft(mobileAlign)};

        ${theme.media.medLarge`
          margin-left: ${getLineMarginLeft(tabletAlign)};
        `}

        ${theme.media.xLarge`
          margin-left: ${getLineMarginLeft(desktopAlign)};
        `}
      }
    `;

    const leftAlignedLine = css`
      position: absolute;
      left: -100px;
      top: 0;
    `;

    if (desktopAlign === 'left') {
      styles = css`
        ${styles}

        &::after {
          ${theme.media.xLarge`
            ${leftAlignedLine}
          `}
        }
      `;
    } else if (tabletAlign === 'left') {
      styles = css`
        ${styles}

        &::after {
          ${theme.media.medLarge`
            ${leftAlignedLine}
          `}

          ${theme.media.xLarge`
            position: static;
          `}
        }
      `;
    }

    return css`
      ${styles}
    `;
  }}
`;

const SectionHeader = ({ className, ...props }) => (
  <SectionHeaderContainer className={className} {...props}>
    <SectionHeaderTitle {...props}>{props.title}</SectionHeaderTitle>
    <SectionHeaderTagline {...props}>{props.tagline}</SectionHeaderTagline>
  </SectionHeaderContainer>
);

SectionHeader.defaultProps = {
  mobileAlign: 'center',
  tabletAlign: 'center',
  desktopAlign: 'center',
};

export default SectionHeader;
