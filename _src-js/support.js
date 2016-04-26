import document from 'global/document';
import window from 'global/window';
import $ from 'jquery';
import './lib/bootstrap.js';

$(function() {
  $('#no-js-support').remove();

  if (Modernizr.video) {
    var msg = "<p>We did a quick test, and it looks like you <span class='video-support-status label label-success'>do</span> support HTML5 video!";
    msg = msg + probablySupport() + maybeSupport();
    $('.my-browser-support').append(msg);
  } else {
    $('.my-browser-support').append("<p>We did a quick test, and it looks like you <span class='video-support-status label label-important'>don't</span> support HTML5 video. Please consider upgrading to a modern version of one of the browsers below, such as <a href='https://www.google.com/intl/en/chrome/browser/' target='_blank'>Chrome</a></p>")
  }

  $('.html5-support img').tooltip({
    placement: function (tooltip, el) {
      var el = $(el).position();
      setTimeout(function() {
        $(tooltip).css(el)
      }, 0)
    }
  });

});

function maybeSupport() {
  var supported = [], str;

  if (Modernizr.video.h264 === 'maybe') supported.push('H.264');
  if (Modernizr.video.ogg === 'maybe') supported.push('Ogg');
  if (Modernizr.video.webm === 'maybe') supported.push('WebM');

  if (supported.length > 0) {
    str = " You <u>might</u> support these codecs: ";
    return str + supported.join(', ') + '.';
  }

  return '';
}

function probablySupport() {
  var supported = [], str;

  if (Modernizr.video.h264 === 'probably') supported.push('H.264');
  if (Modernizr.video.ogg === 'probably') supported.push('Ogg');
  if (Modernizr.video.webm === 'probably') supported.push('WebM');

  if (supported.length > 0) {
    str = " As far as we can tell, it looks like you <u>probably</u> support these codecs: ";
    return str + supported.join(', ') + '.';
  }

  return ''
}
