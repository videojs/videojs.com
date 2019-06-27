import React from 'react';
import { Link } from 'gatsby';

import { heroThemes } from '../utils/styles';
import Layout from '../components/Layout';
import Image from '../components/Image';
import SEO from '../components/SEO';

import Hero from '../components/HomeComponents/Hero';
import Features from '../components/HomeComponents/Features';
import UsedBy from '../components/HomeComponents/UsedBy';
import Sponsors from '../components/HomeComponents/Sponsors';
import Implementation from '../components/HomeComponents/Implementation';
import AdvancedExample from '../components/HomeComponents/AdvancedExample';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    const themeKeys = Object.keys(heroThemes);
    this.themeName = themeKeys[Math.floor(Math.random() * themeKeys.length)];
    // this.themeName = 'forrest';
  }

  render() {
    return (
      <Layout themeName={this.themeName}>
        <SEO
          title="Make your player yours"
          keywords={['HTML5 video', 'player', 'hls', 'adaptive-bitrate']}
        />
        <Hero themeName={this.themeName}>
          <h1>Make your player yours</h1>
        </Hero>
        <Features />
        <UsedBy />
        <AdvancedExample />
        <Sponsors />
        <Implementation />

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
