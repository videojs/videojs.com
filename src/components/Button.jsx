import styled from 'styled-components';

const Button = styled.button`
  background-color: #fff;
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  padding: 0.7em;
  max-width: 12em;
  margin: 0.3em;
  color: ${props => props.theme.currentTheme.colorText};
  border: solid 3px ${props => props.theme.currentTheme.color};
  border-radius: 100px;
  letter-spacing: 0.1em;
  font-family: ${props => props.theme.buttonFont};
  font-weight: 600;
  transition: ${props => props.theme.transitionSpeed};
  line-height: 2.5em;

  &:hover {
    background-color: ${props => props.theme.currentTheme.color};
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
