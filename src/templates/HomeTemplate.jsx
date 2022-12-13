import React from 'react';

import Layout from '../components/Layout';
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
