import styled from 'styled-components';
import Button from './Button';

import UpArrow from '../images/up-arrow.svg';

const ThemeSelector = styled(Button)`
  border: none;
  max-width: none;
  padding: 0;

  ${props => props.theme.media.medium`
    margin-left: 5em;
  `}

  &:after {
    display: inline-block;
    vertical-align: middle;
    border-radius: 100px;
    margin-left: 0.6em;
    width: 40px;
    height: 40px;
    content: '';
    background-color: ${props => props.theme.currentTheme.color};
    background-image: url(${UpArrow});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:hover {
    background-color: #fff;
    color: ${props => props.theme.currentTheme.color};
    opacity: 0.5;
  }
`;

export default ThemeSelector;
