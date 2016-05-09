import React from 'react';
import ReactDOM from 'react-dom'

export default React.createClass({
  getInitialState() {
    return {calls: 0};
  },
  componentDidMount() {
    const name = this.props.item;
    const player = this.props.player;
    player.on(name, () => this.setState({calls: this.state.calls + 1}));
  },

  render() {
    return (
      <li className="list-item">
        <span className="list-item-name">{this.props.item}</span>
        <span className="list-item-value">{this.state.calls}</span>
      </li>
    );
  }
});
