import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
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
import { H1, P } from '../components/Typography';

const StyledHero = styled(Hero)`
  ${Container} {
    padding-bottom: 2.5em;
  }
  ${({ theme }) => theme.media.xlLarge`
    background-position: center -670px;

    ${Container} {
      padding-top: 12em;
      padding-bottom: 12em;
    }
  `}
`;

const SecondPage = () => (
  <Layout>
    <SEO title="HTML5 Video Support" />
    <StyledHero theme={{ ...theme, currentTheme: theme.fantasy }}>
      <Container>
        <H1>HTML5 Video Support by Codec</H1>
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
            <SupportCell supported>18</SupportCell>
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
            <SupportCell>No</SupportCell>
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
    </Container>
  </Layout>
);

export default SecondPage;
