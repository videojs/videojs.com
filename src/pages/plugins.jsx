import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import PluginsHero from '../components/PluginsComponents/PluginsHero';
import PluginsList from '../components/PluginsComponents/PluginsList';

const PluginsPage = () => (
  <Layout>
    <SEO
      title="plugins/index - Video.js: The Player Framework"
    />
    <PluginsHero />
    <PluginsList />
  </Layout>
);

export default PluginsPage;
