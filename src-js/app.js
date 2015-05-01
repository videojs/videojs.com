import $ from 'jquery';

var player, overlay, templateEl, $overlay;

player = videojs('preview-player');

overlay = document.createElement('div');
overlay.className = 'videojs-hero-overlay';
templateEl = document.querySelector('#overlay-template');
overlay.innerHTML = templateEl.innerHTML;
player.el().appendChild(overlay);

$overlay = $(overlay);
player.on('play', function() {
  $overlay.hide();
});

player.on('pause', function() {
  $overlay.show();
});
