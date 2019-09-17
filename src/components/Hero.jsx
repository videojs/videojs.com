import styled from 'styled-components';

import Container from './Container';
import { H1, H2 } from './Typography';

const Hero = styled.div`
  text-align: center;
  background-color: ${props => props.theme.currentTheme.color};
  color: #fff;

  ${({ theme }) => theme.media.medLarge`
    background-image: url(${props => props.theme.currentTheme.image});
    background-repeat: no-repeat;
    background-position: center top;
  `}

  ${H1} {
    font-size: 34px;
    line-height: 1em;
    margin-bottom: 0.3em;
    text-align: center;

    ${({ theme }) => theme.media.medium`
      font-size: 56px;
      line-height: 1em;
      margin-bottom: 0.3em;
    `}

    ${({ theme }) => theme.media.medLarge`
      font-size: 56px;
      line-height: 1em;
      margin-bottom: 0.3em;
    `}
  }

  ${H2} {
    font-family: ${props => props.theme.currentTheme.defaultSans};
    font-size: 20px;
    line-height: 1.4em;
    margin-bottom: 0.8em;
    text-align: center;

    ${({ theme }) => theme.media.small`
      font-size: 22px;
      margin-bottom: 1.2em;
      line-height: 1.4em;
    `}

    ${({ theme }) => theme.media.large`
      margin-bottom: 2.4em;
    `}
  }

  ${Container} {
    padding-top: 6em;

    ${({ theme }) => theme.media.medLarge`
      padding-top: 8em;
    `}

    ${({ theme }) => theme.media.xlLarge`
      padding-top: 10em;
      padding-bottom: 20em;
    `}
  }
`;

export default Hero;
