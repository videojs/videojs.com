import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/SEO';
import Hero from '../components/Hero';
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  SupportCell,
} from '../components/Table';
import { theme } from '../utils/styles';
import Container from '../components/Container';
import { H2, P } from '../components/Typography';

const StyledHero = styled(Hero)`
  ${Container} {
    padding-bottom: 4em;
  }
  ${({ theme }) => theme.media.large`
    ${Container} {
      padding-bottom: 6em;
    }
  `}
  ${({ theme }) => theme.media.xlLarge`
    background-position: center -425px;
    ${Container} {
      padding-top: 10em;
      padding-bottom: 10em;
    }
  `}
`;

const StyledH2 = styled(H2)`
  font-size: 34px;
  line-height: 1em;
  font-weight: 500;
  ${({ theme }) => theme.media.medium`
    font-size: 56px;
    padding: 0;
  `}
  ${({ theme }) => theme.media.medLarge`
    font-size: 56px;
    padding: 0;
  `}
`;

const SecondPage = () => (
  <Layout>
    <Seo title="HTML5 Video Support" />
    <StyledHero theme={{ ...theme, currentTheme: theme.fantasy }}>
      <Container>
        <StyledH2>HTML5 Video Support by Codec</StyledH2>
      </Container>
    </StyledHero>
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Chrome</TableCell>
            <TableCell>Edge</TableCell>
            <TableCell>Firefox</TableCell>
            <TableCell>Internet Explorer</TableCell>
            <TableCell>Opera</TableCell>
            <TableCell>Safari</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell header>H.264</TableCell>
            <SupportCell supported>4</SupportCell>
            <SupportCell supported>12</SupportCell>
            <SupportCell supported>35</SupportCell>
            <SupportCell supported>9</SupportCell>
            <SupportCell supported>25</SupportCell>
            <SupportCell supported>3.2</SupportCell>
          </TableRow>
          <TableRow>
            <TableCell header>HEVC (H.265)</TableCell>
            <SupportCell>No</SupportCell>
            <SupportCell>No&nbsp;*</SupportCell>
            <SupportCell>No</SupportCell>
            <SupportCell supported>11</SupportCell>
            <SupportCell>No</SupportCell>
            <SupportCell supported>11</SupportCell>
          </TableRow>
          <TableRow>
            <TableCell header>AV1</TableCell>
            <SupportCell supported>70</SupportCell>
            <SupportCell supported>75</SupportCell>
            <SupportCell supported>67</SupportCell>
            <SupportCell>No</SupportCell>
            <SupportCell supported>57</SupportCell>
            <SupportCell>No</SupportCell>
          </TableRow>
          <TableRow>
            <TableCell header>VP8 (WebM)</TableCell>
            <SupportCell supported>25</SupportCell>
            <SupportCell supported>14</SupportCell>
            <SupportCell supported>4</SupportCell>
            <SupportCell supported>9</SupportCell>
            <SupportCell supported>16</SupportCell>
            <SupportCell supported>12.1</SupportCell>
          </TableRow>
          <TableRow>
            <TableCell header>VP9 (WebM)</TableCell>
            <SupportCell supported>29</SupportCell>
            <SupportCell supported>14</SupportCell>
            <SupportCell supported>28</SupportCell>
            <SupportCell>No</SupportCell>
            <SupportCell supported>10.6</SupportCell>
            <SupportCell supported>14.1</SupportCell>
          </TableRow>
          <TableRow>
            <TableCell header>Ogg Theora</TableCell>
            <SupportCell supported>3</SupportCell>
            <SupportCell supported>Yes</SupportCell>
            <SupportCell supported>3.5</SupportCell>
            <SupportCell>No</SupportCell>
            <SupportCell supported>10.5</SupportCell>
            <SupportCell>No</SupportCell>
          </TableRow>
        </TableBody>
      </Table>

      <P>
        For a more detailed writeup of the various codecs and their browser
        support, we highly suggest Mozilla's{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs">
          excellent documentation
        </a>
        .
      </P>
      <P>* Legacy Edge supported HEVC. Modern (Chromium) Edge does not.</P>
    </Container>
  </Layout>
);

export default SecondPage;
