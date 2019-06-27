import React from 'react';

const timerangePropertyNames = [
  'buffered',
  'seekable',
  'played'
];

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

const timeRangesToString = (tr) => {
  const arr = [];

  for (let i = 0; i < tr.length; i++) {
    arr.push('[' + tr.start(i).toFixed(2) + ', ' + tr.end(i).toFixed(2) + ']');
  }

  return arr;
};

const urlLike = (val) => (/^(?:.*https?(:|%3A))?\/\//).test(val);

const urlMinifier = (val) => {
  let start = val.match(/^(?:.*https?(:|%3A))?\/\/[^/]*\//)[0].length;
  let end = val.match(/[^/]*$/)[0].length;
  start = Math.min(start, 30);
  end = Math.min(end, 20);
  return val.slice(0, start) + '(…)' + val.slice(-end);
};

class MediaPropertyItem extends React.Component {
  constructor (...args) {
    super(...args);
    this.state = { value: this.getItemState() };
  }

  getItemState () {
    const { item, player } = this.props;
    let value = getter(item, player);

    if (typeof value === 'string' && urlLike(value)) {
      value = urlMinifier(value);
    } else if (value && timerangePropertyNames.includes(item.name)) {
      value = timeRangesToString(value).join(', ');
    } else {
      value = JSON.stringify(value) || '';
    }

    return value;
  }

  componentDidMount () {
    const { item, player } = this.props;
    let events = ['loadstart', 'loadedmetadata'];

    if (item.updater) {
      events = events.concat(item.updater);
    }

    player.on(events, () => this.setState({ value: this.getItemState() }));
  }

  render () {
    const { item } = this.props;
    const { value } = this.state;

    return (
      <li className="list-item">
        <span className="list-item-name">{item.name}</span>
        <span className="list-item-value">{value}</span>
      </li>
    );
  }
}

export default MediaPropertyItem;
