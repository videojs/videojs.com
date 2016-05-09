import React from 'react';
import ReactDOM from 'react-dom'

const getter = (item, player) => {
  let value; 

  if (item.getter) {
    value = item.getter(player);
  } else {
    const prop = player[item.name];
    value = typeof prop === 'function' ?
            prop.call(player) :
            prop;
  }

  return JSON.stringify(value) || "";
};

export default React.createClass({
  getItemState() {
    const item = this.props.item;
    const player = this.props.player;
    const value = getter(item, player);

    return value;
  },

  getInitialState() {
    const value = this.getItemState();
    return {value};
  },

  componentDidMount() {
    const item = this.props.item;
    const player = this.props.player;

    let events = ['loadstart', 'loadedmetadata'];

    if (item.updater) {
      events.concat(item.updater);
    }

    player.on(events, () => this.setState({value: this.getItemState()}));
  },

  render() {
    return (
      <li className="list-item">
        <span className="list-item-name">{this.props.item.name}</span>
        <span className="list-item-value">{this.state.value}</span>
      </li>
    );
  }
});
