import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/SEO';
import AdvancedExample from '../components/HomeComponents/AdvancedExample';
import AdvancedHero from '../components/AdvancedComponents/AdvancedHero';

const AdvancedPage = () => (
  <Layout>
    <AdvancedHero />
    <AdvancedExample enableThemeQueryParam hideDescription />
  </Layout>
);

export default AdvancedPage;

export const Head = () => {
  return <Seo title="Advanced example" description="An extended example of Video.js player features." />;
};
