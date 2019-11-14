import React from 'react';
import { heroThemes } from '../utils/styles';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Button from './Button';

import UpArrow from '../images/up-arrow.svg';
import DownArrow from '../images/down-arrow.svg';

const StyledButton = styled(Button)`
  border: none;
  max-width: none;
  background-color: ${props => props.theme.currentTheme.color};
  color: #fff;
  padding: 1em;

  ${props => props.theme.media.medium`
    margin-left: 5em;
    background-color: #fff;
    color: ${props.theme.currentTheme.colorText};
    padding: 0;
  `}

  &:hover {
    ${({ theme }) => theme.media.medium`
      background-color: #fff;
      color: ${props => props.theme.currentTheme.colorText};
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
  background-image: ${props =>
    props.open ? `url(${DownArrow})` : `url(${UpArrow})`};
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
  background-color: #fff;
  top: 5em;
  padding: 20px;
  width: 100%;
  box-shadow: 0px 5px 32px 0 rgba(0, 0, 0, 0.4);
  -webkit-transition: all 0.5s ease-out;
  transition: all 0.3s ease-out;
  transform: rotateX(90deg);
  transform-origin: top;
  opacity: 0;
  display: block;
  ${({ theme }) => theme.media.medium`
    width: 150px;
    right: 4em;
  `}
  &.showing {
    opacity: 1;
    transform: rotateX(0deg);
    transform-origin: top;
  }
  ul {
    list-style: none;
    text-align: center;
  }
  a {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const ThemeItem = styled.li`
  padding: 12px 0;
  ${({ theme }) => theme.media.medium`
    padding: 6px 0;
  `}

  a {
    color: ${props => props.color};
    font-weight: bold;
    border: none;
    background-color: transparent;

    text-decoration: ${({ active }) => active && 'underline'};
    cursor: ${({ active }) => active && 'default'};
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const DropdownCaret = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
  margin: 0 auto;
  position: absolute;
  top: -0.5em;
  right: 48vw;
  ${({ theme }) => theme.media.medium`
    right: 4em;
  `}
`;

class ThemeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDropdown: false };
  }

  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  onThemeClick = key => () => {
    this.props.changeTheme(key);
    this.toggleDropdown();
  };

  render() {
    const { showDropdown } = this.state;
    const { className, children } = this.props;
    return (
      <Wrapper className={className}>
        <StyledButton onClick={() => this.toggleDropdown()}>
          {children}
          <Circle open={showDropdown} />
        </StyledButton>
        <Dropdown className={showDropdown ? 'showing' : ''}>
          <DropdownCaret />
          <ul>
            {Object.keys(heroThemes).map(key => {
              return (
                <ThemeItem
                  key={key}
                  color={heroThemes[key].color}
                  active={this.props.currentTheme === key}
                >
                  <Link to={`/${key}`}>{key}</Link>
                </ThemeItem>
              );
            })}
          </ul>
        </Dropdown>
      </Wrapper>
    );
  }
}

export default ThemeSelector;
