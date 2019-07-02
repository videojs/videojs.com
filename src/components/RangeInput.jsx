import React from 'react';
import styled from 'styled-components';

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 0.7em;
`;

const Input = styled.input`
  -webkit-appearance: none;
  display: block;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    heigth: 0.625em;
    cursor: pointer;
    background: #3071a9;
    border-radius: 0.3125em;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: poiner;
    background: #fff;
    border-radius: 6px;
    width: 20px;
    height: 20px;
    margin-top: -10px;
  }

  &:focus::-webkit-slider-runnable-track {
    background: #367ebd;
  }
`;

const Range = ({ className, label, value, ...props }) => (
  <div className={className}>
    <Labels>
      <span>{label}</span>
      <span>{value}</span>
    </Labels>
    <Input type="range" value={value} {...props} />
  </div>
);

export default Range;
