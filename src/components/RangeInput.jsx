import React from 'react';
import PropTypes from 'prop-types';
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
    cursor: 'pointer',
  },
  active: {
    backgroundColor: '#4677ba',
    cursor: 'pointer',
  },
  thumb: {
    width: 20,
    height: 20,
    cursor: 'pointer',
  },
};

const RangeInput = ({ className, label, min, max, step, value, onChange }) => (
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

RangeInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RangeInput;
