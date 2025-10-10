import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  border-top-color: ${({ borderColor }) => borderColor || '#ebebeb'};
  border-top-width: 2px;
  border-top-style: solid;
  padding: 1em 0.5em;
  text-align: center;
  letter-spacing: 1.4px;
  color: ${({ color, theme }) => color || theme.brand.lightGreyText};
  text-transform: uppercase;
`;

const TitleBoxContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor || '#fff'};
  border-color: ${({ borderColor }) => borderColor || '#ebebeb'};
  border-width: 2px;
  border-style: solid;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 100px;

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
  padding: 4em 2em;
  min-height: 225px;
`;

const TitleBox = ({
  className,
  children,
  title,
  url,
  bgColor,
  borderColor,
  textBorderColor,
  textColor,
  rel,
  ...linkProps
}) => (
  <TitleBoxContainer
    className={className}
    bgColor={bgColor}
    borderColor={borderColor}
  >
    <a href={url} rel={rel} {...linkProps}>
      <TitleBoxContent>{children}</TitleBoxContent>
      <Title color={textColor} borderColor={textBorderColor}>
        {title}
      </Title>
    </a>
  </TitleBoxContainer>
);

export default styled(TitleBox)``;
