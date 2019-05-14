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
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Logo>
      <Link to="/">
        <Image filename="logo-white.svg" />
      </Link>
    </Logo>

    <Navigation>
      <Link to="#get-started">Get Started</Link>
      <Link to="#customize">Customize</Link>
      <Link to="#docs">Docs</Link>
      <Link to="#blog">Blog</Link>
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
