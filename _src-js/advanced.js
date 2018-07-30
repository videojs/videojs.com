import 'es5-shim';
import 'es6-shim';
import 'es7-shim';
import videojs from 'video.js';
import document from 'global/document';
import 'videojs-playlist';
import 'videojs-playlist-ui';
import playlist from './lib/playlist.js';
import boundProperties from './lib/bound-properties.js';
import mediaEvents from './lib/media-events.js';
import mediaProperties from './lib/media-properties.js';

if (typeof Uint8Array !== 'undefined') {
  require('videojs-contrib-hls');
}

const player = window.player = videojs('preview-player', {
  fluid: true
}, function() {
  if (player.hasPlugin('mux')) {
    player.mux({
      data: {
        property_key: 'VJSISBEST',
      }
    });
  }
});

player.on('loadstart', function() {
  const pl = player.playlist();
  const plitem = pl[player.playlist.currentItem()];

  player.mux.emit('videochange', {
    video_id: plitem.name,
    video_title: plitem.name,
    video_duration: plitem.duration,
  });
});

player.playlist(playlist);
player.playlistUi();

boundProperties(player);
mediaEvents(player);
mediaProperties(player);
