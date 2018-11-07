import window from 'global/window';
import document from 'global/document';
import $ from 'jquery';
import videojs from 'video.js';
import { getPackage } from './lib/vjs-version.js';

const player = window.player = videojs('preview-player', {
  fluid: true
}, function() {
  if (player.hasPlugin('mux')) {
    player.mux({
      data: {
        property_key: 'VJSISBEST',
        video_title: 'Disney\'s Oceans',
        video_id: 1
      }
    })
  };
  player.removeClass('placeholder');
});

const overlay = $('.videojs-hero-overlay');
player.on(['play', 'playing'], function() {
  overlay.addClass('transparent');
});
player.on(['pause'], function() {
  overlay.removeClass('transparent');
});

// Get the package information for setting the version on the NPM shield/badge
getPackage(function(e, pkg) {
  if (e) console.error(e);

  $('.vjs-version').text('v' + pkg.version);
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
