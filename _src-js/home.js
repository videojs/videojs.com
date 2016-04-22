import window from 'global/window';
let $ = window.jQuery;

var player, overlay, templateEl, $overlay;

player = videojs('preview-player');

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
