import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { heroThemes } from '../utils/styles';

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
      </Layout>
    );
  }
}

export default IndexPage;
