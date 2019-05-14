import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Image from './Image';
import Link from './Link';

const Logo = styled.h1`
  display: inline-block;
`;

const HeaderContainer = styled.header`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`;

const Navigation = styled.div`
  & > * {
    padding-left: 1em;
  }

  ${Link} {
    color: white;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Logo>
      <Link to="/">
        <Image filename="logo-white.svg" />
      </Link>
    </Logo>

    <Navigation>
      <Link href="#get-started">Get Started</Link>
      <Link href="#customize">Customize</Link>
      <Link href="#docs">Docs</Link>
      <Link href="#blog">Blog</Link>
      <Link href="https://github.com/videojs/video.js">Github</Link>
    </Navigation>
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
