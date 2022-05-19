import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/SEO';
import { heroThemes, blankTheme } from '../utils/styles';

import Hero from '../components/HomeComponents/Hero';
import Features from '../components/HomeComponents/Features';
import UsedBy from '../components/HomeComponents/UsedBy';
import Sponsors from '../components/HomeComponents/Sponsors';
import Implementation from '../components/HomeComponents/Implementation';
import AdvancedExample from '../components/HomeComponents/AdvancedExample';
import GetInvolved from '../components/HomeComponents/GetInvolved';

const IndexPage = props => {
  const themeName = props.pageContext.theme;
  const heroTheme = themeName ? heroThemes[themeName] : blankTheme;

  return (
    <Layout heroTheme={heroTheme}>
      <Seo
        title="Video.js - Make your player yours"
        keywords={['HTML5 video', 'player', 'hls', 'adaptive-bitrate']}
      />
      <Hero
        heroTheme={heroTheme}
        transitionDuration={props.transitionDuration}
        onPlay={props.onPlay}
      >
      </Hero>
      <Features />
      <UsedBy />
      <AdvancedExample />
      <Sponsors />
      <Implementation />
      <GetInvolved />
    </Layout>
  );
};

IndexPage.defaultProps = {
  onPlay: () => {},
};

export default IndexPage;
