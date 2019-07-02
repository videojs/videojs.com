import React from 'react';
import styled from 'styled-components';
import Slider from 'react-input-slider';

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 0.7em;
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

const Range = ({ className, label, value, onChange, ...props }) => (
  <div className={className}>
    <Labels>
      <span>{label}</span>
      <span>{value}</span>
    </Labels>
    <Slider
      axis="x"
      x={value}
      styles={sliderStyles}
      onChange={({ x }) => onChange(x)}
    />
  </div>
);

export default Range;
