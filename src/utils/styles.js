import { css } from 'styled-components';

import cityBg from '../images/city-hero.svg';
import fantasyBg from '../images/fantasy-hero.svg';
import forrestBg from '../images/forrest-hero.svg';
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

export const heroThemes = {
  city: {
    image: cityBg,
    color: brand.red,
  },
  fantasy: {
    image: fantasyBg,
    color: brand.purple,
  },
  forrest: {
    image: forrestBg,
    color: brand.green,
  },
  sea: {
    image: seaBg,
    color: brand.blue,
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
