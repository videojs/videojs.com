import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: pink;
`;

const CustomLink = props => (
  <StyledLink as={props.href ? 'a' : Link} {...props} />
);

export default styled(CustomLink)``;
