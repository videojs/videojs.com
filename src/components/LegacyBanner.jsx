import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.aside`
  position: relative;
  z-index: 101;
  padding: 0.75em 1em;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;

  a {
    color: ${props => props.theme.brand.orange};
    font-weight: bold;
    text-decoration: underline;
    white-space: nowrap;
  }
`;

// This site documents Video.js 8 and earlier; point readers at the current release.
const LegacyBanner = () => (
  <Wrapper aria-label="Video.js version notice">
    You're viewing docs for Video.js 8 and earlier.{' '}
    <a href="https://videojs.org/">Video.js 10 is here</a> &middot;{' '}
    <a href="https://videojs.org/docs/framework/html/guides/migrate-from-video-js-8">
      Migrate from Video.js 8
    </a>
  </Wrapper>
);

export default LegacyBanner;
