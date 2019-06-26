import styled from 'styled-components';

import Container from './Container';
import { H1, H2 } from './Typography';
import { media } from '../utils/styles';

const Hero = styled.div`
  text-align: center;
  background-color: ${props => props.theme[props.themeName].color};
  background-image: url(${props => props.theme[props.themeName].image});
  background-repeat: no-repeat;
  background-position: center top;
  color: #fff;

  ${H1} {
    font-size: 34px;
    line-height: 1em;
    margin-bottom: 0.3em;
    text-align: center;

    ${media.medium`
      font-size: 56px;
      line-height: 1em;
      margin-bottom: 0.3em;
    `}

    ${media.medLarge`
      font-size: 56px;
      line-height: 1em;
      margin-bottom: 0.3em;
    `}
  }

  ${H2} {
    font-family: ${props => props.theme.defaultSans};
    font-size: 20px;
    line-height: 1.4em;
    margin-bottom: 0.8em;
    text-align: center;

    ${media.small`
      font-size: 22px;
      margin-bottom: 1.2em;
      line-height: 1.4em;
    `}

    ${media.large`
      margin-bottom: 2.4em;
    `}
  }

  ${Container} {
    padding-top: 6em;

    ${media.medLarge`
      padding-top: 8em;
    `}

    ${media.xlLarge`
      padding-top: 10em;
      padding-bottom: 20em;
    `}
  }
`;

export default Hero;
