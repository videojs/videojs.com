import React from 'react';
import { heroThemes } from '../utils/styles';
import styled from 'styled-components';
import Button from './Button';

import UpArrow from '../images/up-arrow.svg';

const StyledButton = styled(Button)`
  border: none;
  max-width: none;
  background-color: ${props => props.theme.currentTheme.color};
  color: #fff;
  padding: 1em;

  ${props => props.theme.media.medium`
    margin-left: 5em;
    background-color: #fff;
    color: ${props.theme.currentTheme.color};
    padding: 0;
  `}

  &:hover {
    ${({ theme }) => theme.media.medium`
      background-color: #fff;
      color: ${props => props.theme.currentTheme.color};
      opacity: 0.5;
    `}
  }
`;

const Circle = styled.span`
  display: inline-block;
  vertical-align: middle;
  border-radius: 100px;
  margin-left: 0.6em;
  width: 40px;
  height: 40px;
  content: '';
  background-image: url(${UpArrow});
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.2;
    border-radius: 50%;
  }

  ${({ theme }) => theme.media.medium`
    background-color: ${props => props.theme.currentTheme.color};

    &::before {
      display: none;
    }
  `}
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
`;

const ThemeItem = styled.li`
  padding: 6px 0;
  a {
    color: ${props => props.color};
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

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
    const { className, children } = this.props;
    return (
      /**
        <StyledButton className={className} onClick={() => this.toggleDropdown()}>
          {children}
          <Circle />
        </StyledButton>
      **/
      
      <Wrapper className={className}>
        <StyledButton className={showDropdown ? 'open' : ''} onClick={() => this.toggleDropdown()}>
          {children}
          <Circle />
        </StyledButton>
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
    )
  }
}

export default ThemeSelector;
