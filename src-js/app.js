import $ from 'jquery';

import 'videojs-overlay/lib/videojs-overlay.js';

var template =
    '<div class="videojs-hero">'
    + '<img src="/img/logo.png" alt="Video.js" class="logo">'
    + '<span class="subhead">The Player Framework</span>'
    + '<a href="https://www.npmjs.com/package/video.js">'
    + '<img src="https://img.shields.io/npm/v/video.js.svg" class="npm-badge">'
    + '</a>'
    + '</div>';

var player = videojs('preview-player');
player.overlay({
  overlays: [{
    content: template,
    class: 'videojs-hero-overlay',
    align: 'top',
    start: 'pause',
    end: 'playing'
  }]
});

// var overlay = document.createElement('div');
// overlay.className = 'vjs-overlay vjs-overlay-top videojs-hero-overlay';
// overlay.innerHtml = template;
// player.el().appendChild(overlay);
