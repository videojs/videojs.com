import React from 'react';
import ReactDOM from 'react-dom'

export default React.createClass({
  getInitialState() {
    return {calls: 0};
  },
  componentDidMount() {
    const name = this.props.name;
    const player = this.props.player;
    player.on(name, () => this.setState({calls: this.state.calls + 1}));
  },

  render() {
    return (
      <li className="event-item">
        <span className="event-name">{this.props.name}</span>
        <span className="event-value">{this.state.calls}</span>
      </li>
    );
  }
});
