import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/SEO';

import PluginsHero from '../components/PluginsComponents/PluginsHero';
import PluginsList from '../components/PluginsComponents/PluginsList';

const PluginsPage = () => (
  <Layout>
    <PluginsHero />
    <PluginsList />
  </Layout>
);

export default PluginsPage;

export const Head = () => {
  return <Seo title="Video.js Plugins" description="A list of plugins for Video.js." />;
};
