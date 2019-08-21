import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import UpArrow from '../images/up-arrow.svg';
import DownArrow from '../images/down-arrow.svg';
import { heroThemes } from '../utils/styles';

const ThemeSwapButton = styled(Button)`
  border: none;
  max-width: none;
  padding: 0;
  marginLeft: 4em;

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

  &.open:after {
    background-image: url(${DownArrow});
  }

  &:hover {
    background-color: #fff;
    color: ${props => props.theme.currentTheme.color};
    opacity: 0.5;
  }
`;

const Wrapper = styled.div`
  position: relative;
  .arrow-up {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    margin: 0 auto;
    position: absolute;
    top: -8px;
    right: 42%;
  }
`;

const Dropdown = styled.div`
  z-index: 100;
  position: absolute;
  right: 4em;
  top: 5em;
  background-color: #fff;
  width: 150px;
  padding: 20px;
  box-shadow: 0px 5px 32px 0 rgba(0, 0, 0, 0.4);
  -webkit-transition: all .5s ease-out;
  transition: all .3s ease-out;
  transform: rotateX(90deg);
  transform-origin: top;
  opacity: 0;
  display: block;

  &.showing {
    opacity: 1;
    transform: rotateX(0deg);
    transform-origin: top;
  }

  ul {
    list-style: none;
    text-align: center;
  }
  li {
    padding: 6px 0;
  }
  a {
    font-weight: bold;
    text-transform: uppercase;
  }
`

const ThemeItem = styled.li`
  padding: 6px 0;
  a {
    color: ${props => props.color};
    font-weight: bold;
  }
`

class ThemeSelector extends React.Component {
  constructor (props) {
    super(props);
    this.state = {showDropdown: false};
  }

  toggleDropdown () {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  render () {
    const { showDropdown } = this.state;
    return (
      <Wrapper>
        <ThemeSwapButton className={showDropdown ? 'open' : ''} onClick={() => this.toggleDropdown() }>
          Swap Theme
        </ThemeSwapButton>
        <Dropdown className={showDropdown ? 'showing' : ''}>
          <div className='arrow-up'></div>
          <ul>
            {Object.keys(heroThemes).map((key) => {
              return (
                <ThemeItem key={key} color={heroThemes[key].color}>
                  <a href={`/?theme=${key}`}>{key}</a>
                </ThemeItem>
              )
            })}
          </ul>
        </Dropdown>
      </Wrapper>
    );
  }
};

export default ThemeSelector;
