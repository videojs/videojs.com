import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AdvancedExample from '../components/HomeComponents/AdvancedExample';
import AdvancedHero from '../components/AdvancedComponents/AdvancedHero';

const AdvancedPage = () => (
  <Layout>
    <SEO title="Video.js - Make your player yours" />
    <AdvancedHero />
    <AdvancedExample enableThemeQueryParam hideDescription />
  </Layout>
);

export default AdvancedPage;
