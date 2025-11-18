import React from 'react';
import styled from 'styled-components';
import { slide as BurgerMenu } from 'react-burger-menu';

import Container from './Container';
import Link from './Link';
import LogoImg from '../images/logo-white.svg';

const Logo = styled(props => (
  <div className={props.className}>
    <h1>Video.js - HTML5 Video Player</h1>
    <Link to="/" aria-label="Video.js - HTML5 Video Player"></Link>
  </div>
))`
  display: inline-block;
  margin-top: 16px;
  margin-left: 16px;

  ${props => props.theme.media.medLarge`
    margin: 0;
  `}

  h1 {
    font-size: 0;
    position: absolute;
    top: -99999px;
    left: -99999px;
    overflow:hidden;
    width:1px;
    height:1px;
  }

  ${Link} {
    display: block;
    width: 158px;
    height: 37px;
    background: center / contain no-repeat url(${LogoImg});
  }
`;

const HeaderWrapper = styled.header`
  position: absolute;
  width: 100%;
  z-index: 100;

  ${Container} {
    display: flex;
    justify-content: space-between;
  }
`;

const MobileMenu = styled.div`
  ${props => props.theme.media.medLarge`
    display: none;
  `};

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    top: 1em;
    right: 1em;

    &::before {
      content: '';
      position: absolute;
      width: 150%;
      height: 150%;
      top: -25%;
      left: -25%;
      background-color: #000;
      opacity: 0.2;
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #fff;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  ${Link} {
    color: white;
    padding-left: 1em;
  }
`;

const DesktopMenu = styled.nav`
  display: none;

  ${props => props.theme.media.medLarge`
    display: flex;
  `};
`;

const NavigationLinks = styled(props => (
  <ul className={props.className}>
    <li>
      <Link to="/getting-started">Get Started</Link>
    </li>
    <li>
      <Link href="/guides">Guides</Link>
    </li>
    <li>
      <Link href="https://docs.videojs.com">API Docs</Link>
    </li>
    <li>
      <Link to="/blog">Blog</Link>
    </li>
    <li>
      <Link href="https://github.com/videojs/video.js">Github</Link>
    </li>
  </ul>
))`
  display: flex;
  column-gap: 2em;
  list-style: none;

  li {
    flex-direction: row;
    font-size: 16px;

    ${props => props.theme.media.medLarge`
      flex-direction: column;
    `};

    &:first-child {
      margin-left: 0;
    }
  }

  ${Link} {
    display: block;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-family: ${props => props.theme.defaultSans};
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.91667;

    ${props => props.theme.media.medLarge`
      font-size: 0.8rem;
      padding: 0;
    `}
  }

  ${Link}:hover, &.selected ${Link} {
    text-decoration: none;
    background: rgba(225,225,225,0.1);

    ${props => props.theme.media.medLarge`
      opacity: 1;
      text-decoration: none;
      background: 0;
      opacity: 0.5;
    `}
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Container>
      <Logo />

      <DesktopMenu role="navigation">
        <NavigationLinks />
      </DesktopMenu>

      <MobileMenu>
        <BurgerMenu right>
          <NavigationLinks />
        </BurgerMenu>
      </MobileMenu>
    </Container>
  </HeaderWrapper>
);

export default Header;
