import window from 'global/window';
import document from 'global/document';
import $ from 'jquery';
import videojs from 'video.js';

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

player.on('ready', function() {
  player.removeClass('placeholder');
});

const overlay = $('.videojs-hero-overlay');
player.on(['play', 'pause'], function() {
  overlay.toggleClass('transparent');
});

// Poor man's lazy loading the iframe content to speed up homeage loading
setTimeout(function(){
  Array.prototype.forEach.call(document.querySelectorAll('iframe'), function(ifrm){
    const src = ifrm.getAttribute('temp-src');

    if (src) {
      ifrm.setAttribute('src', src);
    }
  });
}, 1000);
