import React from 'react';
import styled from 'styled-components';
import Slider from 'react-input-slider';

const Wrapper = styled.div`
  margin-bottom: 1em;
`;

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 0.2em;
`;

const sliderStyles = {
  track: {
    backgroundColor: '#ededed',
    width: '100%',
  },
  active: {
    backgroundColor: '#4677ba',
  },
  thumb: {
    width: 20,
    height: 20,
  },
};

const Range = ({ className, label, min, max, step, value, onChange }) => (
  <Wrapper className={className}>
    <Labels>
      <span>{label}</span>
      <span>{value}</span>
    </Labels>
    <Slider
      axis="x"
      x={value}
      xmin={min}
      xmax={max}
      xstep={step}
      styles={sliderStyles}
      onChange={({ x }) => onChange(x)}
    />
  </Wrapper>
);

export default Range;
