import { css } from 'styled-components';

import cityBg from '../images/city-hero.svg';
import fantasyBg from '../images/fantasy-hero.svg';
import forestBg from '../images/forest-hero.svg';
import seaBg from '../images/sea-hero.svg';

const brand = {
  blue: '#4276b9',
  green: '#5f8749',
  red: '#bf3d4f',
  purple: '#9F43B5',

  purpleLight: '#827790',
  orange: '#f49f4d',
  grey: '#232323',
  lightGrey: '#b2b2b2',
  lightGreyText: '#666',
};

export const blankTheme = {
  name: 'blank',
  image: undefined,
  color: '#999',
  colorText: '#000',
};

export const heroThemes = {
  city: {
    name: 'city',
    image: cityBg,
    color: brand.red,
    colorText: brand.red,
    video: 'https://stream.mux.com/UZMwOY6MgmhFNXLbSFXAuPKlRPss5XNA.m3u8',
    poster:
      'https://image.mux.com/UZMwOY6MgmhFNXLbSFXAuPKlRPss5XNA/thumbnail.jpg?time=11',
  },
  fantasy: {
    name: 'fantasy',
    image: fantasyBg,
    color: brand.purple,
    colorText: brand.purple,
    video: 'https://stream.mux.com/FGZHQaIg7cjVNS2dgTrnMYSdCkXohOl3.m3u8',
    poster:
      'https://image.mux.com/FGZHQaIg7cjVNS2dgTrnMYSdCkXohOl3/thumbnail.jpg',
  },
  forest: {
    name: 'forest',
    image: forestBg,
    color: brand.green,
    colorText: '#4d7838', // We need a darker green just for the buttons on white
    video: 'https://stream.mux.com/dt7i6WNyYd8ns4V2AeJHWNKaw00aiChpR.m3u8',
    poster:
      'https://image.mux.com/dt7i6WNyYd8ns4V2AeJHWNKaw00aiChpR/thumbnail.jpg',
  },
  sea: {
    name: 'sea',
    image: seaBg,
    color: brand.blue,
    colorText: brand.blue,
    video: 'https://stream.mux.com/TCGCMQS8XH01lxPZldTnveL8tpVXVNYxe.m3u8',
    poster:
      'https://image.mux.com/TCGCMQS8XH01lxPZldTnveL8tpVXVNYxe/thumbnail.jpg',
  },
};

export const defaultTheme = heroThemes.sea;

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
