import React from 'react';

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
      <li className="list-item">
        <span className="list-item-name">{item}</span>
        <span className="list-item-value">{calls}</span>
      </li>
    );
  }
}

export default MediaEventItem;
