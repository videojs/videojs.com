import $ from 'jquery';

var player, overlay, templateEl, $overlay;

player = videojs('preview-player');

overlay = document.createElement('div');
overlay.className = 'videojs-hero-overlay transparent';
templateEl = document.querySelector('#overlay-template');
overlay.innerHTML = templateEl.innerHTML;
player.el().appendChild(overlay);

$overlay = $(overlay);

setTimeout(function(){
  $overlay.removeClass('transparent');
}, 250);

player.on('play', function() {
  $overlay.addClass('transparent');
});

player.on('pause', function() {
  $overlay.removeClass('transparent');
});
