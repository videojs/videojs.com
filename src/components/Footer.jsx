import React from 'react';
import styled from 'styled-components';

import Link from './Link';
import Image from './Image';

import rectangles from '../images/footer-rectangles.svg';

const Wrapper = styled.footer`
  padding: 6em 2em 8em;
  text-align: center;

  ${({ theme }) => theme.media.medLarge`
    background-image: url(${rectangles});
    height: 50em;
  `}
`;

const VideoJsLogoWrapper = styled.div`
  margin-bottom: 2.4em;
`;

const Nav = styled.ul`
  color: #000;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.85;
  letter-spacing: 0.075em;
  list-style-type: none;
  padding: 0;
  margin: 0 0 1.5em 0;
  text-transform: uppercase;
  display: none;

  ${({ theme }) => theme.media.medLarge`
    display: block;
  `}
`;

const NavItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 2em;
  }

  a {
    color: inherit;
  }
`;

const Copyright = styled.div`
  color: #010101;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.85;
  letter-spacing: -0.01em;
  margin-bottom: 3em;
`;

const Logos = styled.div`
  a:not(:last-child) {
    margin-right: 1.2em;
  }
`;

const Footer = props => (
  <Wrapper>
    <VideoJsLogoWrapper>
      <Link to="/">
        <Image filename="logo-black.svg" alt="Video.js - HTML5 Video Player logo" />
      </Link>
    </VideoJsLogoWrapper>
    <Nav>
      <NavItem>
        <Link to="/getting-started">Get Started</Link>
      </NavItem>
      <NavItem>
        <Link href="/guides">Guides</Link>
      </NavItem>
      <NavItem>
        <Link href="https://docs.videojs.com">API Docs</Link>
      </NavItem>
      <NavItem>
        <Link to="/blog">Blog</Link>
      </NavItem>
      <NavItem>
        <Link href="https://github.com/videojs/video.js" rel="noopener noreferrer">Github</Link>
      </NavItem>
      <NavItem>
        <Link to="/privacy">Privacy</Link>
      </NavItem>
    </Nav>
    <Copyright>
      {props.heroVideoDetails && (
        <p>
          Example video:{' '}
          <a href={props.heroVideoDetails.link}>
            {props.heroVideoDetails.attribution}
          </a>
        </p>
      )}
      <p>Video.js is a free and open source <a href="/">HTML5 video player</a>.</p>
      <p>
        &copy; 2010-present Video.js contributors | Sponsored by <a href="https://www.mux.com">Mux</a>
      </p>
      <p>
        VIDEO.JS is a registered trademark of Brightcove Inc.
      </p>
    </Copyright>
    <Logos>
      <Link href="https://twitter.com/@videojs" rel="noopener noreferrer">
        <Image filename="x-twitter.svg" alt="Twitter logo" />
      </Link>
      <Link href="https://github.com/videojs/video.js" rel="noopener noreferrer">
        <Image filename="github.svg" alt="Github logo" />
      </Link>
    </Logos>
  </Wrapper>
);

export default Footer;
