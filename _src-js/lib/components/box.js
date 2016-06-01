import React from 'react';
import ReactDOM from 'react-dom'
import shortid from 'shortid';

export default function(Item) {
  return React.createClass({
    render() {
      return (
        <ul className="list">
          <li className="list-item list-header">
            <span className="list-item-name">{this.props.name}</span>
            <span className="list-item-value">{this.props.value}</span>
          </li>
          {this.props.data.map((item) => {
            return (
              <Item key={shortid.generate()} item={item} player={this.props.player} />
            );
          })}
        </ul>
      );
    }
  });
};
