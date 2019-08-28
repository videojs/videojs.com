import { css } from 'styled-components';

import cityBg from '../images/city-hero.svg';
import fantasyBg from '../images/fantasy-hero.svg';
import forestBg from '../images/forrest-hero.svg';
import seaBg from '../images/sea-hero.svg';

const brand = {
  blue: '#4276b9',
  green: '#70af56',
  red: '#bf3d4f',
  purple: '#9F43B5',

  purpleLight: '#827790',
  orange: '#f49f4d',
  grey: '#232323',
  lightGrey: '#b2b2b2',
};

const styleHost = 'https://videojs-themes.mmcc.now.sh';

export const heroThemes = {
  city: {
    image: cityBg,
    color: brand.red,
    style: `${styleHost}/city/city.css`,
    video: 'https://stream.mux.com/FGZHQaIg7cjVNS2dgTrnMYSdCkXohOl3.m3u8',
    poster:
      'https://image.mux.com/FGZHQaIg7cjVNS2dgTrnMYSdCkXohOl3/thumbnail.jpg',
  },
  fantasy: {
    image: fantasyBg,
    color: brand.purple,
    style: `${styleHost}/fantasy/fantasy.css`,
    video: 'https://stream.mux.com/FGZHQaIg7cjVNS2dgTrnMYSdCkXohOl3.m3u8',
    poster:
      'https://image.mux.com/FGZHQaIg7cjVNS2dgTrnMYSdCkXohOl3/thumbnail.jpg',
  },
  forest: {
    image: forestBg,
    color: brand.green,
    style: `${styleHost}/forest/forest.css`,
    video: 'https://stream.mux.com/lcCItlgNmRvWG3S5Mz8FAX6uURp6mUrn.m3u8',
    poster:
      'https://image.mux.com/lcCItlgNmRvWG3S5Mz8FAX6uURp6mUrn/thumbnail.jpg',
  },
  sea: {
    image: seaBg,
    color: brand.blue,
    style: `${styleHost}/sea/sea.css`,
    video: 'https://stream.mux.com/FGZHQaIg7cjVNS2dgTrnMYSdCkXohOl3.m3u8',
    poster:
      'https://image.mux.com/FGZHQaIg7cjVNS2dgTrnMYSdCkXohOl3/thumbnail.jpg',
  },
};

export const breakpoints = {
  tiny: 320,
  tinySmall: 360,
  small: 600,
  medium: 760,
  medLarge: 960,
  large: 1100,
  xLarge: 1170,
  xlLarge: 1400,
  wide: 1600,
  superWide: 1800,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const theme = {
  brand,
  breakpoints,
  media,

  ...heroThemes,

  maxWidth: '1400px',
  defaultSans: '"Montserrat", sans-serif',
  defaultSerif: 'sans-serif',
  buttonFont: '"Montserrat", sans-serif',
  selectionColor: '#b4d5ff',

  transitionSpeed: 'all 0.2s ease-out',
};
