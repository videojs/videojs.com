/*! videojs-playlist-ui - v2.2.0 - 2016-05-09
* Copyright (c) 2016 Brightcove; Licensed Apache-2.0 */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/*! videojs-playlist-ui - v0.0.0 - 2015-3-12
 * Copyright (c) 2015 Brightcove
 * Licensed under the Apache-2.0 license. */

var videojs = _interopRequire((typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null));

// Array#indexOf analog for IE8
var indexOf = function indexOf(array, target) {
  for (var i = 0, _length = array.length; i < _length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

// see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/pointerevents.js
var supportsCssPointerEvents = (function () {
  var element = document.createElement("x");
  element.style.cssText = "pointer-events:auto";
  return element.style.pointerEvents === "auto";
})();

var defaults = {
  className: "vjs-playlist",
  playOnSelect: false,
  supportsCssPointerEvents: supportsCssPointerEvents
};

// we don't add `vjs-playlist-now-playing` in addSelectedClass
// so it won't conflict with `vjs-icon-play
// since it'll get added when we mouse out
var addSelectedClass = function addSelectedClass(el) {
  el.addClass("vjs-selected");
};
var removeSelectedClass = function removeSelectedClass(el) {
  el.removeClass("vjs-selected");

  if (el.thumbnail) {
    videojs.removeClass(el.thumbnail, "vjs-playlist-now-playing");
  }
};

var createThumbnail = function createThumbnail(thumbnail) {
  if (!thumbnail) {
    var placeholder = document.createElement("div");
    placeholder.className = "vjs-playlist-thumbnail";
    return placeholder;
  }

  var picture = document.createElement("picture");
  picture.className = "vjs-playlist-thumbnail";

  if (typeof thumbnail === "string") {
    // simple thumbnails
    var img = document.createElement("img");
    img.src = thumbnail;
    picture.appendChild(img);
  } else {
    // responsive thumbnails

    // additional variations of a <picture> are specified as
    // <source> elements
    for (var i = 0; i < thumbnail.length - 1; i++) {
      var _variant = thumbnail[i];
      var source = document.createElement("source");
      // transfer the properties of each variant onto a <source>
      for (var prop in _variant) {
        source[prop] = _variant[prop];
      }
      picture.appendChild(source);
    }

    // the default version of a <picture> is specified by an <img>
    var variant = thumbnail[thumbnail.length - 1];
    var img = document.createElement("img");
    for (var prop in variant) {
      img[prop] = variant[prop];
    }
    picture.appendChild(img);
  }
  return picture;
};

var Component = videojs.getComponent("Component");

var PlaylistMenuItem = (function (_Component) {
  function PlaylistMenuItem(player, playlistItem, settings) {
    _classCallCheck(this, PlaylistMenuItem);

    if (!playlistItem.item) {
      throw new Error("Cannot construct a PlaylistMenuItem without an item option");
    }

    _get(Object.getPrototypeOf(PlaylistMenuItem.prototype), "constructor", this).call(this, player, playlistItem);
    this.item = playlistItem.item;

    this.playOnSelect = settings.playOnSelect;

    this.emitTapEvents();

    this.on(["click", "tap"], this.switchPlaylistItem_);
    this.on("keydown", this.handleKeyDown_);
    this.on(["focus", "mouseover"], this.addPlayIcon_);
    this.on(["blur", "mouseout"], this.removePlayIcon_);
  }

  _inherits(PlaylistMenuItem, _Component);

  _createClass(PlaylistMenuItem, {
    handleKeyDown_: {
      value: function handleKeyDown_(event) {
        // keycode 13 is <Enter>
        // keycode 32 is <Space>
        if (event.which === 13 || event.which === 32) {
          this.switchPlaylistItem_();
        }
      }
    },
    switchPlaylistItem_: {
      value: function switchPlaylistItem_(event) {
        this.player_.playlist.currentItem(indexOf(this.player_.playlist(), this.item));
        if (this.playOnSelect) {
          this.player_.play();
        }
      }
    },
    addPlayIcon_: {
      value: function addPlayIcon_() {
        videojs.addClass(this.thumbnail, "vjs-icon-play");
        videojs.removeClass(this.thumbnail, "vjs-playlist-now-playing");
      }
    },
    removePlayIcon_: {
      value: function removePlayIcon_() {
        if (document.activeElement === this.el()) {
          return;
        }

        videojs.removeClass(this.thumbnail, "vjs-icon-play");
        if (this.hasClass("vjs-selected")) {
          videojs.addClass(this.thumbnail, "vjs-playlist-now-playing");
        }
      }
    },
    createEl: {
      value: function createEl() {
        var li = document.createElement("li");
        var item = this.options_.item;

        li.className = "vjs-playlist-item";
        li.setAttribute("tabIndex", 0);

        // Thumbnail image
        this.thumbnail = createThumbnail(item.thumbnail);
        li.appendChild(this.thumbnail);

        // Duration
        if (item.duration) {
          var duration = document.createElement("time");
          var time = videojs.formatTime(item.duration);
          duration.className = "vjs-playlist-duration";
          duration.setAttribute("datetime", "PT0H0M" + item.duration + "S");
          duration.appendChild(document.createTextNode(time));
          li.appendChild(duration);
        }

        // Name and description
        var name = document.createElement("cite");
        var nameValue = item.name || this.localize("Untitled Video");
        name.className = "vjs-playlist-name";
        name.appendChild(document.createTextNode(nameValue));
        name.setAttribute("title", nameValue);
        li.appendChild(name);

        if (item.description) {
          var description = document.createElement("p");
          description.className = "vjs-playlist-description";
          description.appendChild(document.createTextNode(item.description));
          description.setAttribute("title", item.description);
          li.appendChild(description);
        }

        return li;
      }
    }
  });

  return PlaylistMenuItem;
})(Component);

var PlaylistMenu = (function (_Component2) {
  function PlaylistMenu(player, settings) {
    var _this = this;

    _classCallCheck(this, PlaylistMenu);

    if (!player.playlist) {
      throw new Error("videojs-playlist is required for the playlist component");
    }

    _get(Object.getPrototypeOf(PlaylistMenu.prototype), "constructor", this).call(this, player, settings);
    this.items = [];

    // If CSS pointer events aren't supported, we have to prevent
    // clicking on playlist items during ads with slightly more
    // invasive techniques. Details in the stylesheet.
    if (settings.supportsCssPointerEvents) {
      this.addClass("vjs-csspointerevents");
    }

    this.createPlaylist_();

    if (!videojs.browser.TOUCH_ENABLED) {
      this.addClass("vjs-mouse");
    }

    player.on(["loadstart", "playlistchange"], function (event) {
      _this.update();
    });

    // keep track of whether an ad is playing so that the menu
    // appearance can be adapted appropriately
    player.on("adstart", function () {
      _this.addClass("vjs-ad-playing");
    });
    player.on("adend", function () {
      _this.removeClass("vjs-ad-playing");
    });
  }

  _inherits(PlaylistMenu, _Component2);

  _createClass(PlaylistMenu, {
    createEl: {
      value: function createEl() {
        var settings = this.options_;
        if (settings.el) {
          return settings.el;
        }

        var ol = document.createElement("ol");
        ol.className = settings.className;
        settings.el = ol;
        return ol;
      }
    },
    createPlaylist_: {
      value: function createPlaylist_() {
        var playlist = this.player_.playlist() || [];

        // remove any existing items
        for (var i = 0; i < this.items.length; i++) {
          this.removeChild(this.items[i]);
        }
        this.items.length = 0;
        var overlay = this.el_.querySelector(".vjs-playlist-ad-overlay");
        if (overlay) {
          overlay.parentNode.removeChild(overlay);
        }

        // create new items
        for (var i = 0; i < playlist.length; i++) {
          var item = new PlaylistMenuItem(this.player_, {
            item: playlist[i]
          }, this.options_);
          this.items.push(item);
          this.addChild(item);
        }

        // Inject the ad overlay. IE<11 doesn't support "pointer-events:
        // none" so we use this element to block clicks during ad
        // playback.
        overlay = document.createElement("li");
        overlay.className = "vjs-playlist-ad-overlay";
        this.el_.appendChild(overlay);

        // select the current playlist item
        var selectedIndex = this.player_.playlist.currentItem();
        if (this.items.length && selectedIndex >= 0) {
          addSelectedClass(this.items[selectedIndex]);

          var thumbnail = this.items[selectedIndex].$(".vjs-playlist-thumbnail");
          if (thumbnail) {
            videojs.addClass(thumbnail, "vjs-playlist-now-playing");
          }
        }
      }
    },
    update: {
      value: function update() {
        // replace the playlist items being displayed, if necessary
        var playlist = this.player_.playlist();
        if (this.items.length !== playlist.length) {
          // if the menu is currently empty or the state is obviously out
          // of date, rebuild everything.
          this.createPlaylist_();
          return;
        }
        for (var i = 0; i < this.items.length; i++) {
          if (this.items[i].item !== playlist[i]) {
            // if any of the playlist items have changed, rebuild the
            // entire playlist
            this.createPlaylist_();
            return;
          }
        }

        // the playlist itself is unchanged so just update the selection
        var currentItem = this.player_.playlist.currentItem();
        for (var i = 0; i < this.items.length; i++) {
          var item = this.items[i];
          if (i === currentItem) {
            addSelectedClass(item);
            if (document.activeElement !== item.el()) {
              videojs.addClass(item.thumbnail, "vjs-playlist-now-playing");
            }
          } else {
            removeSelectedClass(item);
          }
        }
      }
    }
  });

  return PlaylistMenu;
})(Component);

/**
 * Initialize the plugin.
 * @param options (optional) {object} configuration for the plugin
 */
var playlistUi = function playlistUi(options) {
  var player = this;
  var settings = undefined,
      elem = undefined;

  if (!player.playlist) {
    throw new Error("videojs-playlist is required for the playlist component");
  }

  // if the first argument is a DOM element, use it to build the component
  if (typeof HTMLElement !== "undefined" && options instanceof HTMLElement || options && options.nodeType === 1) {
    elem = options;
    settings = videojs.mergeOptions(defaults);
  } else {
    // lookup the elements to use by class name
    settings = videojs.mergeOptions(defaults, options);
    elem = document.querySelector("." + settings.className);
  }

  // build the playlist menu
  settings.el = elem;
  player.playlistMenu = new PlaylistMenu(player, settings);
};

// register components
videojs.registerComponent("PlaylistMenu", PlaylistMenu);
videojs.registerComponent("PlaylistMenuItem", PlaylistMenuItem);

// register the plugin
videojs.plugin("playlistUi", playlistUi);

// IE8 does not define HTMLElement so use a hackier type check

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
