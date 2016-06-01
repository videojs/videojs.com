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

  return value;
};

const timerangePropertyNames = [
  'buffered',
  'seekable',
  'played'
];

const timeRangesToString = (tr) => {
  const arr = [];

  for (let i = 0; i < tr.length; i++) {
    arr.push('[' + tr.start(i).toFixed(2) + ', ' + tr.end(i).toFixed(2) + ']');
  }

  return arr;
};

const urlLike = (val) => (/^(?:.*https?(:|%3A))?\/\//).test(val);

const urlMinifier = (val) => {
  let start = val.match(/^(?:.*https?(:|%3A))?\/\/[^\/]*\//)[0].length;
  let end = val.match(/[^\/]*$/)[0].length;
  start = Math.min(start, 30);
  end = Math.min(end, 20);
  return val.slice(0, start) + '(…)' + val.slice(-end);
};


export default React.createClass({
  getItemState() {
    const item = this.props.item;
    const player = this.props.player;
    let value = getter(item, player);

    if (typeof value === 'string' && urlLike(value)) {
      value = urlMinifier(value);
    } else if (value && timerangePropertyNames.includes(item.name)) {
      value = timeRangesToString(value).join(', ');
    } else {
      value = JSON.stringify(value) || '';
    }


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
      events = events.concat(item.updater);
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
