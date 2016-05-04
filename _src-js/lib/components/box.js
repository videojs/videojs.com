import React from 'react';
import ReactDOM from 'react-dom'
import EventItem from './item.js';

export default React.createClass({
  render() {
    return (
      <ul className="events-list">
        <li className="event-item events-list-header">
          <span className="event-name">Event</span>
          <span className="event-value">Times fired</span>
        </li>
        {this.props.data.map((event) => {
          return (
            <EventItem key={event} name={event} player={this.props.player} />
          );
        })}
      </ul>
    );
  }
});
