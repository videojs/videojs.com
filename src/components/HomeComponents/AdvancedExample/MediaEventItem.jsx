import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  background-color: #232323;
  border: 2px solid #000;
  border-top: none;
  color: #fff;
  font-size: 13px;
  line-height: 3.85;
  padding: 0 32px;

  > span {
    display: inline-block;

    &:nth-child(1) {
      width: 80%;
    }

    &:nth-child(2) {
      width: 20%; 
      text-align: right;
    }
  }
`;

class MediaEventItem extends React.Component {
  constructor (...args) {
    super(...args);
    this.state = { calls: 0 };
  }

  componentDidMount () {
    const { item: name, player } = this.props;

    player.on(name, () => this.setState((prevState) => ({
      calls: prevState.calls + 1
    })));
  }

  render () {
    const { item } = this.props;
    const { calls } = this.state;

    return (
      <Li>
        <span>{item}</span>
        <span>{calls}</span>
      </Li>
    );
  }
}

export default MediaEventItem;
