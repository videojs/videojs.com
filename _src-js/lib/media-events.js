import React from 'react';
import ReactDOM from 'react-dom'
import videojs from 'video.js';
import document from 'global/document';
import EventBoxMaker from './components/box.js';
import EventItem from './components/events-item.js';

const EventBox = EventBoxMaker(EventItem);

export default function(player) {
  const events = window.MediaEvents = videojs.getTech('Html5').Events;

  ReactDOM.render(
    <EventBox name="Event" value="Times Fired" data={events} player={player}/>,
    document.querySelector('.media-events')
  );
};
