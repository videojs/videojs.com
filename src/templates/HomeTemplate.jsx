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
import { Helmet } from 'react-helmet';

const IndexPage = props => {
  const themeName = props.pageContext.theme;
  const heroTheme = themeName ? heroThemes[themeName] : blankTheme;

  return (
    <Layout heroTheme={heroTheme}>
      <Seo
        title="HTML5 Video Player"
        keywords={['HTML5 video', 'player', 'hls', 'adaptive-bitrate']}
        description="The world's most popular free and open source HTML5 video player for web and mobile."
      />
      <Helmet>
        {/* Origin trial for documentPictureInPicture */}
        <meta http-equiv="origin-trial" content="AtSClXdNOoAPsggUV+nqh187coO6axCtgTdtFue+P9rz9xqRA5qjlz0AB92Edaxh9imwk/NJueqxdO9QmkqrswUAAABzeyJvcmlnaW4iOiJodHRwczovL3ZpZGVvanMuY29tOjQ0MyIsImZlYXR1cmUiOiJEb2N1bWVudFBpY3R1cmVJblBpY3R1cmVBUEkiLCJleHBpcnkiOjE2OTQxMzExOTksImlzU3ViZG9tYWluIjp0cnVlfQ==" />
      </Helmet>
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
