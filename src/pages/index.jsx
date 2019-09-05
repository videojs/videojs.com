/* globals window */
import React from 'react';
import queryString from 'query-string';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { heroThemes } from '../utils/styles';

import Hero from '../components/HomeComponents/Hero';
import Features from '../components/HomeComponents/Features';
import UsedBy from '../components/HomeComponents/UsedBy';
import Sponsors from '../components/HomeComponents/Sponsors';
import Implementation from '../components/HomeComponents/Implementation';
import AdvancedExample from '../components/HomeComponents/AdvancedExample';
import GetInvolved from '../components/HomeComponents/GetInvolved';

const themeKeys = Object.keys(heroThemes);

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      let themeName = '';
      const themeFromQuery = queryString.parse(window.location.search).theme;
      if (themeKeys.includes(themeFromQuery)) {
        themeName = themeFromQuery;
      } else {
        themeName = themeKeys[Math.floor(Math.random() * themeKeys.length)];
      }
      this.setState({ themeName });
    }
  }

  changeTheme = themeName => {
    this.setState({ themeName });
    const params = new URLSearchParams(window.location.search);
    params.set('theme', themeName);
    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${params.toString()}`
    );
  };

  render() {
    const { themeName } = this.state;
    const heroTheme = themeName ? heroThemes[themeName] : null;
    return (
      <Layout heroTheme={heroTheme}>
        <SEO
          title="Make your player yours"
          keywords={['HTML5 video', 'player', 'hls', 'adaptive-bitrate']}
        />
        <Hero heroTheme={heroTheme} changeTheme={this.changeTheme}>
          <h1>Make your player yours</h1>
        </Hero>
        <Features />
        <UsedBy />
        <AdvancedExample />
        <Sponsors />
        <Implementation />
        <GetInvolved />
      </Layout>
    );
  }
}

export default IndexPage;
