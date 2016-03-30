(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _globalDocument = require('global/document');

var _globalDocument2 = _interopRequireDefault(_globalDocument);

var _globalWindow = require('global/window');

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var $ = _globalWindow2['default'].jQuery;

$(function () {
  $('#no-js-support').remove();

  if (Modernizr.video) {
    var msg = "<p>We did a quick test, and it looks like you <span class='video-support-status label label-success'>do</span> support HTML5 video!";
    msg = msg + probablySupport() + maybeSupport();
    $('.my-browser-support').append(msg);
  } else {
    $('.my-browser-support').append("<p>We did a quick test, and it looks like you <span class='video-support-status label label-important'>don't</span> support HTML5 video. Please consider upgrading to a modern version of one of the browsers below, such as <a href='https://www.google.com/intl/en/chrome/browser/' target='_blank'>Chrome</a></p>");
  }

  $('.html5-support img').tooltip({
    placement: function placement(tooltip, el) {
      var el = $(el).position();
      setTimeout(function () {
        $(tooltip).css(el);
      }, 0);
    }
  });
});

function maybeSupport() {
  var supported = [],
      str;

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
  var supported = [],
      str;

  if (Modernizr.video.h264 === 'probably') supported.push('H.264');
  if (Modernizr.video.ogg === 'probably') supported.push('Ogg');
  if (Modernizr.video.webm === 'probably') supported.push('WebM');

  if (supported.length > 0) {
    str = " As far as we can tell, it looks like you <u>probably</u> support these codecs: ";
    return str + supported.join(', ') + '.';
  }

  return '';
}

},{"global/document":2,"global/window":3}],2:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":4}],3:[function(require,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){

},{}]},{},[1]);
