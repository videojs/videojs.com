import React from 'react';
import styled from 'styled-components';

import MediaItem from './MediaItem';

const StyledMediaItem = styled(MediaItem)`
  border-right: none;

  > span {
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
      calls: prevState.calls + 1,
    })));
  }

  render () {
    const { item } = this.props;
    const { calls } = this.state;

    return (
      <StyledMediaItem>
        <span>{item}</span>
        <span>{calls}</span>
      </StyledMediaItem>
    );
  }
}

export default MediaEventItem;
