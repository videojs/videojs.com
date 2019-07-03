import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import PluginsHero from '../components/PluginsComponents/PluginsHero';

const PluginsPage = () => (
  <Layout>
    <SEO
      title="plugins/index - Video.js: The Player Framework"
    />
    <PluginsHero />
  </Layout>
);

export default PluginsPage;
