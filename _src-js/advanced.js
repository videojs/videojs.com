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
const eventsData = window.MediaEventsData = {};
events.reduce((acc, c) => (acc[c] = 0, acc), eventsData);

events.forEach((event) => {
  player.on(event, () => {
    eventsData[event]++;
  });
});

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
