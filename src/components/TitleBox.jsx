import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  border-top: solid 2px #ebebeb;
  padding: 1.9em;
  text-align: center;
  letter-spacing: 1.4px;
  color: rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
`;

const TitleBoxContainer = styled.div`
  border: solid 2px #ebebeb;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin: 0 1em 100px 1em;

  &:hover {
    border-color: ${props => props.theme.currentTheme.color};

    ${Title} {
      border-color: ${props => props.theme.currentTheme.color};
    }
  }
`;

const TitleBoxContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 4em;
  min-height: 225px;
`;

const TitleBox = props => (
  <TitleBoxContainer>
    <a href={props.url}>
      <TitleBoxContent>{props.children}</TitleBoxContent>
      <Title>{props.title}</Title>
    </a>
  </TitleBoxContainer>
);

export default TitleBox;
