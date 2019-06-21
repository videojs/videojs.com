import styled from 'styled-components';

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  position: relative;

  ${props => props.theme.media.medLarge`padding: 2em;`}

  ${props => props.theme.media.large`padding: 2.8em 2em;`};
`;

export default Container;
