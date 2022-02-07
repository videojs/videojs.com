import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from '../Image';

const Wrapper = styled.div`
  margin-bottom: 3em;

  > img {
    display: block;
    margin: 0 auto;
  }
`;

const ImageDesc = styled.span`
  display: block;
  margin-top: 1em;
  color: #424242;
  font-size: 14px;
  text-align: center;
`;

const GuidesImage = props => (
  <Wrapper>
    <Image {...props} />
    {props.alt && <ImageDesc>{props.alt}</ImageDesc>}
  </Wrapper>
);

GuidesImage.propTypes = {
  alt: PropTypes.string,
};

export default GuidesImage;
