import React from 'react';
import ReactDOM from 'react-dom'
import videojs from 'video.js';
import EventBox from './components/box.js';

export default function(player) {
  const events = window.MediaEvents = videojs.getTech('Html5').Events;

  ReactDOM.render(
    <EventBox data={events} player={player}/>,
    document.querySelector('.media-events')
  );
};
