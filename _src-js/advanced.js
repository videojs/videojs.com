import React from 'react';
import ReactDOM from 'react-dom'
import videojs from 'video.js';
import document from 'global/document';
import 'videojs-contrib-hls';
import 'videojs-playlist';
import 'videojs-playlist-ui';
import playlist from './lib/playlist.js';

const player = window.player = videojs('preview-player', {
  fluid: true,
  plugins: {
    mux: {
      data: {
        property_key: 'VJSISBEST',
      }
    }
  }
});

const events = window.MediaEvents = videojs.getTech('Html5').Events;

player.on('loadstart', function() {
  const pl = player.playlist();
  const plitem = pl[player.playlist.currentItem()];

  player.muxChangeVideo({
    video_id: plitem.name,
    video_title: plitem.name,
    video_duration: plitem.duration,
  });
});

player.playlist(playlist);
player.playlistUi();

const EventItem = React.createClass({
  getInitialState() {
    return {calls: 0};
  },
  componentDidMount() {
    const name = this.props.name;
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
})
const EventBox = React.createClass({
  render() {
    return (
      <ul className="events-list">
        <li className="event-item events-list-header">
          <span className="event-name">Event</span>
          <span className="event-value">Times fired</span>
        </li>
        {this.props.data.map((event) => {
          return (
            <EventItem key={event} name={event} />
          );
        })}
      </ul>
    );
  }
});

ReactDOM.render(
  <EventBox data={events} />,
  document.querySelector('.media-events')
);
