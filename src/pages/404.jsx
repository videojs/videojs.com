import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Container from '../components/Container';
import { H1 } from '../components/Typography';
import { theme } from '../utils/styles';

const StyledHero = styled(Hero)`
  ${({ theme }) => theme.media.xlLarge`
    background-position: center -670px;

    ${Container} {
      padding-top: 12em;
      padding-bottom: 12em;
    }
  `}
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="Video.js - 404: Not found" />
    <StyledHero theme={{ ...theme, currentTheme: theme.forest }}>
      <Container>
        <H1>Uh oh...Not found!</H1>
        <p>We've looked everywhere, but this page was nowhere to be found.</p>
      </Container>
    </StyledHero>
  </Layout>
);

export default NotFoundPage;
