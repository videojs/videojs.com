import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';

import cityBg from '../images/city-hero.svg';
import fantasyBg from '../images/fantasy-hero.svg';
import forrestBg from '../images/forrest-hero.svg';
import seaBg from '../images/sea-hero.svg';

const THEMES = {
  city: {
    image: cityBg,
    color: '#be3d50',
  },
  fantasy: {
    image: fantasyBg,
    color: '#9d49b3',
  },
  forrest: {
    image: forrestBg,
    color: '#70b050',
  },
  sea: {
    image: seaBg,
    color: '#4378be',
  },
};

const Hero = styled.div`
  background-color: ${props => props.theme.color};
  background-image: url(${props => props.theme.image});
  width: 100%;
  padding-top: 64.4886364%;
  position: absolute;
  top: 0;
  z-index: 0;
`;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    const themeKeys = Object.keys(THEMES)
    const randomTheme = themeKeys[Math.floor(Math.random()*themeKeys.length)];
    this.theme = THEMES[randomTheme];
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Make your player yours"
          keywords={['HTML5 video', 'player', 'hls', 'adaptive-bitrate']}
        />
        <Hero theme={this.theme} />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image filename="logo-black.svg" />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    );
  }
}

export default IndexPage;
