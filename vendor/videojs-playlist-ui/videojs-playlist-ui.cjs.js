'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var document = _interopDefault(require('global/document'));
var window = _interopDefault(require('global/window'));
var videojs = _interopDefault(require('video.js'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// support VJS5 & VJS6 at the same time
var dom = videojs.dom || videojs;
var registerPlugin = videojs.registerPlugin || videojs.plugin;

// Array#indexOf analog for IE8
var indexOf = function indexOf(array, target) {
  for (var i = 0, length = array.length; i < length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

// see https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/pointerevents.js
var supportsCssPointerEvents = function () {
  var element = document.createElement('x');

  element.style.cssText = 'pointer-events:auto';
  return element.style.pointerEvents === 'auto';
}();

var defaults$$1 = {
  className: 'vjs-playlist',
  playOnSelect: false,
  supportsCssPointerEvents: supportsCssPointerEvents
};

// we don't add `vjs-playlist-now-playing` in addSelectedClass
// so it won't conflict with `vjs-icon-play
// since it'll get added when we mouse out
var addSelectedClass = function addSelectedClass(el) {
  el.addClass('vjs-selected');
};
var removeSelectedClass = function removeSelectedClass(el) {
  el.removeClass('vjs-selected');

  if (el.thumbnail) {
    dom.removeClass(el.thumbnail, 'vjs-playlist-now-playing');
  }
};

var createThumbnail = function createThumbnail(thumbnail) {
  if (!thumbnail) {
    var placeholder = document.createElement('div');

    placeholder.className = 'vjs-playlist-thumbnail';
    return placeholder;
  }

  var picture = document.createElement('picture');

  picture.className = 'vjs-playlist-thumbnail';

  if (typeof thumbnail === 'string') {
    // simple thumbnails
    var img = document.createElement('img');

    img.src = thumbnail;
    picture.appendChild(img);
  } else {
    // responsive thumbnails

    // additional variations of a <picture> are specified as
    // <source> elements
    for (var i = 0; i < thumbnail.length - 1; i++) {
      var _variant = thumbnail[i];
      var source = document.createElement('source');

      // transfer the properties of each variant onto a <source>
      for (var prop in _variant) {
        source[prop] = _variant[prop];
      }
      picture.appendChild(source);
    }

    // the default version of a <picture> is specified by an <img>
    var variant = thumbnail[thumbnail.length - 1];
    var _img = document.createElement('img');

    for (var _prop in variant) {
      _img[_prop] = variant[_prop];
    }
    picture.appendChild(_img);
  }
  return picture;
};

var Component = videojs.getComponent('Component');

var PlaylistMenuItem = function (_Component) {
  inherits(PlaylistMenuItem, _Component);

  function PlaylistMenuItem(player, playlistItem, settings) {
    classCallCheck(this, PlaylistMenuItem);

    if (!playlistItem.item) {
      throw new Error('Cannot construct a PlaylistMenuItem without an item option');
    }

    var _this = possibleConstructorReturn(this, _Component.call(this, player, playlistItem));

    _this.item = playlistItem.item;

    _this.playOnSelect = settings.playOnSelect;

    _this.emitTapEvents();

    _this.on(['click', 'tap'], _this.switchPlaylistItem_);
    _this.on('keydown', _this.handleKeyDown_);
    _this.on(['focus', 'mouseover'], _this.addPlayIcon_);
    _this.on(['blur', 'mouseout'], _this.removePlayIcon_);

    return _this;
  }

  PlaylistMenuItem.prototype.handleKeyDown_ = function handleKeyDown_(event) {
    // keycode 13 is <Enter>
    // keycode 32 is <Space>
    if (event.which === 13 || event.which === 32) {
      this.switchPlaylistItem_();
    }
  };

  PlaylistMenuItem.prototype.switchPlaylistItem_ = function switchPlaylistItem_(event) {
    this.player_.playlist.currentItem(indexOf(this.player_.playlist(), this.item));
    if (this.playOnSelect) {
      this.player_.play();
    }
  };

  PlaylistMenuItem.prototype.addPlayIcon_ = function addPlayIcon_() {
    dom.addClass(this.thumbnail, 'vjs-icon-play');
    dom.removeClass(this.thumbnail, 'vjs-playlist-now-playing');
  };

  PlaylistMenuItem.prototype.removePlayIcon_ = function removePlayIcon_() {
    if (document.activeElement === this.el()) {
      return;
    }

    dom.removeClass(this.thumbnail, 'vjs-icon-play');
    if (this.hasClass('vjs-selected')) {
      dom.addClass(this.thumbnail, 'vjs-playlist-now-playing');
    }
  };

  PlaylistMenuItem.prototype.createEl = function createEl() {
    var li = document.createElement('li');
    var item = this.options_.item;

    li.className = 'vjs-playlist-item';
    li.setAttribute('tabIndex', 0);

    // Thumbnail image
    this.thumbnail = createThumbnail(item.thumbnail);
    li.appendChild(this.thumbnail);

    // Duration
    if (item.duration) {
      var duration = document.createElement('time');
      var time = videojs.formatTime(item.duration);

      duration.className = 'vjs-playlist-duration';
      duration.setAttribute('datetime', 'PT0H0M' + item.duration + 'S');
      duration.appendChild(document.createTextNode(time));
      li.appendChild(duration);
    }

    // Name and description
    var name = document.createElement('cite');
    var nameValue = item.name || this.localize('Untitled Video');

    name.className = 'vjs-playlist-name';
    name.appendChild(document.createTextNode(nameValue));
    name.setAttribute('title', nameValue);
    li.appendChild(name);

    if (item.description) {
      var description = document.createElement('p');

      description.className = 'vjs-playlist-description';
      description.appendChild(document.createTextNode(item.description));
      description.setAttribute('title', item.description);
      li.appendChild(description);
    }

    return li;
  };

  return PlaylistMenuItem;
}(Component);

var PlaylistMenu = function (_Component2) {
  inherits(PlaylistMenu, _Component2);

  function PlaylistMenu(player, settings) {
    classCallCheck(this, PlaylistMenu);

    if (!player.playlist) {
      throw new Error('videojs-playlist is required for the playlist component');
    }

    var _this2 = possibleConstructorReturn(this, _Component2.call(this, player, settings));

    _this2.items = [];

    // If CSS pointer events aren't supported, we have to prevent
    // clicking on playlist items during ads with slightly more
    // invasive techniques. Details in the stylesheet.
    if (settings.supportsCssPointerEvents) {
      _this2.addClass('vjs-csspointerevents');
    }

    _this2.createPlaylist_();

    if (!videojs.browser.TOUCH_ENABLED) {
      _this2.addClass('vjs-mouse');
    }

    player.on(['loadstart', 'playlistchange'], function (event) {
      _this2.update();
    });

    // Keep track of whether an ad is playing so that the menu
    // appearance can be adapted appropriately
    player.on('adstart', function () {
      _this2.addClass('vjs-ad-playing');
    });
    player.on('adend', function () {
      if (player.ended()) {
        // player.ended() is true because the content is done, but the ended event doesn't
        // trigger until after the postroll is done and the ad implementation has finished
        // its cycle. We don't consider a postroll ad ended until the "ended" event.
        player.one('ended', function () {
          _this2.removeClass('vjs-ad-playing');
        });
      } else {
        _this2.removeClass('vjs-ad-playing');
      }
    });
    return _this2;
  }

  PlaylistMenu.prototype.createEl = function createEl() {
    var settings = this.options_;

    if (settings.el) {
      return settings.el;
    }

    var ol = document.createElement('ol');

    ol.className = settings.className;
    settings.el = ol;
    return ol;
  };

  PlaylistMenu.prototype.createPlaylist_ = function createPlaylist_() {
    var playlist = this.player_.playlist() || [];

    // remove any existing items
    for (var i = 0; i < this.items.length; i++) {
      this.removeChild(this.items[i]);
    }
    this.items.length = 0;
    var overlay = this.el_.querySelector('.vjs-playlist-ad-overlay');

    if (overlay) {
      overlay.parentNode.removeChild(overlay);
    }

    // create new items
    for (var _i = 0; _i < playlist.length; _i++) {
      var item = new PlaylistMenuItem(this.player_, {
        item: playlist[_i]
      }, this.options_);

      this.items.push(item);
      this.addChild(item);
    }

    // Inject the ad overlay. IE<11 doesn't support "pointer-events:
    // none" so we use this element to block clicks during ad
    // playback.
    overlay = document.createElement('li');
    overlay.className = 'vjs-playlist-ad-overlay';
    this.el_.appendChild(overlay);

    // select the current playlist item
    var selectedIndex = this.player_.playlist.currentItem();

    if (this.items.length && selectedIndex >= 0) {
      addSelectedClass(this.items[selectedIndex]);

      var thumbnail = this.items[selectedIndex].$('.vjs-playlist-thumbnail');

      if (thumbnail) {
        dom.addClass(thumbnail, 'vjs-playlist-now-playing');
      }
    }
  };

  PlaylistMenu.prototype.update = function update() {
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

    for (var _i2 = 0; _i2 < this.items.length; _i2++) {
      var item = this.items[_i2];

      if (_i2 === currentItem) {
        addSelectedClass(item);
        if (document.activeElement !== item.el()) {
          dom.addClass(item.thumbnail, 'vjs-playlist-now-playing');
        }
      } else {
        removeSelectedClass(item);
      }
    }
  };

  return PlaylistMenu;
}(Component);

/**
 * Initialize the plugin.
 * @param options (optional) {object} configuration for the plugin
 */


var playlistUi = function playlistUi(options) {
  var player = this;
  var settings = void 0;
  var elem = void 0;

  if (!player.playlist) {
    throw new Error('videojs-playlist is required for the playlist component');
  }

  // if the first argument is a DOM element, use it to build the component
  if (typeof window.HTMLElement !== 'undefined' && options instanceof window.HTMLElement ||
  // IE8 does not define HTMLElement so use a hackier type check
  options && options.nodeType === 1) {
    elem = options;
    settings = videojs.mergeOptions(defaults$$1);
  } else {
    // lookup the elements to use by class name
    settings = videojs.mergeOptions(defaults$$1, options);
    elem = document.querySelector('.' + settings.className);
  }

  // build the playlist menu
  settings.el = elem;
  player.playlistMenu = new PlaylistMenu(player, settings);
};

// register components
videojs.registerComponent('PlaylistMenu', PlaylistMenu);
videojs.registerComponent('PlaylistMenuItem', PlaylistMenuItem);

// register the plugin
registerPlugin('playlistUi', playlistUi);
