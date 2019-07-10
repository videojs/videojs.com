import React from 'react';
import styled from 'styled-components';

import Link from './Link';
import Image from './Image';
import rectangles from '../images/footer-rectangles.svg';

const Wrapper = styled.footer`
  background-image: url(${rectangles});
  height: 50em;
  padding: 4em 2em;
  text-align: center;
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

const Footer = () => (
  <Wrapper>
    <VideoJsLogoWrapper>
      <Link to="/"><Image filename="logo-black.svg" /></Link>
    </VideoJsLogoWrapper>
    <Nav>
      <NavItem><Link to="/getting-started">Get Started</Link></NavItem>
      <NavItem><Link to="/getting-started/#customize">Customize</Link></NavItem>
      <NavItem><Link href="#docs">Docs</Link></NavItem>
      <NavItem><Link href="#blog">Blog</Link></NavItem>
      <NavItem><Link href="https://github.com/videojs/video.js">Github</Link></NavItem>
    </Nav>
    <Copyright>
      <p>Video.js is a free and open source HTML5 video player.</p>
      <p>&copy; Brightcove, Inc.</p>
    </Copyright>
    <Logos>
      <Link href="https://twitter.com"><Image filename="twitter.svg" /></Link>
      <Link href="https://mail.com"><Image filename="newsletter.svg" /></Link>
      <Link href="https://github.com"><Image filename="github.svg" /></Link>
    </Logos>
  </Wrapper>
);

export default Footer;
