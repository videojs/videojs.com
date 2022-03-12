import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../Layout';
import SEO from '../SEO';
import Container from '../Container';
import GuidesHero from './GuidesHero';

const StyledContainer = styled(Container)`
  width: 100%;
  padding: 2em;

  ${({ theme }) => theme.media.medLarge`
    padding: 6em;
  `}
`;

const GuidesLayout = ({ children, seo }) => (
  <Layout>
    <SEO {...seo} />
    <GuidesHero />
    <StyledContainer>
      {children}
    </StyledContainer>
  </Layout>
);

GuidesLayout.defaultProps = {
  seo: {},
};

GuidesLayout.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.object,
};

export default GuidesLayout;
