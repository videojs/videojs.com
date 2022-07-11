import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/SEO';

import PluginsHero from '../components/PluginsComponents/PluginsHero';
import PluginsList from '../components/PluginsComponents/PluginsList';

const PluginsPage = () => (
  <Layout>
    <Seo title="Video.js Plugins" description="List of plugins for Video.js." />
    <PluginsHero />
    <PluginsList />
  </Layout>
);

export default PluginsPage;
