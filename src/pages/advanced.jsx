import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/SEO';
import AdvancedExample from '../components/HomeComponents/AdvancedExample';
import AdvancedHero from '../components/AdvancedComponents/AdvancedHero';

const AdvancedPage = () => (
  <Layout>
    <Seo title="Video.js - Make your player yours" />
    <AdvancedHero />
    <AdvancedExample enableThemeQueryParam hideDescription />
  </Layout>
);

export default AdvancedPage;
