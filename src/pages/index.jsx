import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components"

import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';

import fantasyBg from '../images/fantasy-hero.svg';

const THEMES = {
  fantasy: {
    image: fantasyBg,
    color: '#9d49b3',
  },
};

const Hero = styled.div`
  background-color: ${props => THEMES[props.theme].color};
  background-image: url(${props => THEMES[props.theme].image});
  width: 100%;
  padding-top: 64.4886364%;
  position: absolute;
  top: 0;
  z-index: 0;
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Make your player yours"
      keywords={['HTML5 video', 'player', 'hls', 'adaptive-bitrate']}
    />
    <Hero theme="fantasy" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image filename="logo-black.svg" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
