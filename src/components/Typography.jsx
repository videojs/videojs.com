import styled, { css } from 'styled-components';

const HeadingBase = css`
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
`;

export const H1 = styled.h1`
  ${props => HeadingBase}
  font-weight: 500;
`;

export const H2 = styled.h2`
  ${props => HeadingBase}
`;

export const H3 = styled.h3`
  ${props => HeadingBase}

  font-size: 18px;
  font-weight: normal;
`;

export const P = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 14px;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  line-height: 1.8em;
  margin-bottom: 2em;
  color: rgba(1, 1, 1, 0.6);
`;
