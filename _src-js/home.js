import window from 'global/window';
import document from 'global/document';
import $ from 'jquery';
import videojs from 'video.js';

var player, overlay, templateEl, $overlay;

window.player = player = videojs('preview-player', {
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


overlay = document.createElement('div');
overlay.className = 'videojs-hero-overlay';
templateEl = document.querySelector('#overlay-template');
overlay.innerHTML = templateEl.innerHTML;
player.el().appendChild(overlay);

$overlay = $(overlay);

setTimeout(function(){
  $overlay.removeClass('transparent');
}, 250);

player.on(['play', 'pause'], function() {
  $overlay.toggleClass('transparent');
});

// Poor man's lazy loading the iframe content to speed up homeage loading
setTimeout(function(){
  Array.prototype.forEach.call(document.querySelectorAll('iframe'), function(ifrm){
    var src = ifrm.getAttribute('temp-src');

    if (src) {
      ifrm.setAttribute('src', src);
    }
  });
}, 1000);
