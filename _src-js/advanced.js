import videojs from 'video.js';
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
        video_title: 'The Boids!',
        video_id: 1
      }
    }
  }
});


player.playlist(playlist);
player.playlistUi();
