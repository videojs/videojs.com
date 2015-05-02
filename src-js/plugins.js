import $ from 'jquery';
import videojs from 'video.js';
import { createElement as el, render, createClass } from 'react';
import marked from 'marked';

// -----
// Model
// -----

// the plugin currently being displayed
const model = {

  selectedPlugin: 0,

  // the list of all plugins currently selectable
  plugins: [{
    "author": "Matthew McClure",
    "created": "2015-01-13T04:13:59.184Z",
    "description": "Videojs default skin with pretty colors",
    "downloads": 72,
    "modified": "2015-01-17T20:01:29.248Z",
    "name": "videojs-skin-colors"
  }, {
    "author": "Matthew McClure",
    "created": "2015-01-15T05:07:53.222Z",
    "description": "Videojs skin that happens to resemble a certain video game streaming site",
    "downloads": 74,
    "modified": "2015-01-16T07:15:52.703Z",
    "name": "videojs-skin-twitchy"
  }, {
    "author": "Brightcove",
    "created": "2013-01-15T05:07:53.222Z",
    "description": "A video.js tech that plays HLS video on platforms that don't support it but have Flash.",
    "downloads": 22,
    "modified": "2015-01-22T07:15:52.703Z",
    "name": "videojs-contrib-hls"
  }, {
    "author": "Matthew McClure",
    "created": "2015-01-13T04:13:59.184Z",
    "description": "Videojs default skin with pretty colors",
    "downloads": 72,
    "modified": "2015-01-17T20:01:29.248Z",
    "name": "videojs-skin-colors"
  }, {
    "author": "Matthew McClure",
    "created": "2015-01-15T05:07:53.222Z",
    "description": "Videojs skin that happens to resemble a certain video game streaming site",
    "downloads": 74,
    "modified": "2015-01-16T07:15:52.703Z",
    "name": "videojs-skin-twitchy"
  }, {
    "author": "Matthew McClure",
    "created": "2015-01-13T04:13:59.184Z",
    "description": "Videojs default skin with pretty colors",
    "downloads": 72,
    "modified": "2015-01-17T20:01:29.248Z",
    "name": "videojs-skin-colors"
  }, {
    "author": "Matthew McClure",
    "created": "2015-01-15T05:07:53.222Z",
    "description": "Videojs skin that happens to resemble a certain video game streaming site",
    "downloads": 74,
    "modified": "2015-01-16T07:15:52.703Z",
    "name": "videojs-skin-twitchy"
  }, {
    "author": "Matthew McClure",
    "created": "2015-01-13T04:13:59.184Z",
    "description": "Videojs default skin with pretty colors",
    "downloads": 72,
    "modified": "2015-01-17T20:01:29.248Z",
    "name": "videojs-skin-colors"
  }, {
    "author": "Matthew McClure",
    "created": "2015-01-15T05:07:53.222Z",
    "description": "Videojs skin that happens to resemble a certain video game streaming site",
    "downloads": 74,
    "modified": "2015-01-16T07:15:52.703Z",
    "name": "videojs-skin-twitchy"
  }]
};

// -----------------
// Plugin Navigation
// -----------------

const PluginNavSection = createClass({
  displayName: 'Plugin Navigation Section',

  // update the list of filtered plugins while the user types
  filterPlugins (event) {
    const filteredPlugins = this.props.plugins.filter((plugin) => {
      return (new RegExp(event.target.value)).test(plugin.name);
    });
    this.props.filterPlugins(filteredPlugins);
  },

  render () {
    return el('nav', { className: 'plugin-nav col-sm-12' },
              el('form', {
                className: 'navbar-form',
                role: 'search',
              },
                 el('div', { className: 'form-group' },
                    el('input', {
                      type: 'text',
                      className: 'form-control',
                      placeholder: 'find extensions',
                      onChange: this.filterPlugins
                    }))));
  }
});

// --------------
// Plugin Listing
// --------------

const PluginListSection = createClass({
  displayName: 'Plugin List Section',
  render () {
    return el('section', {
      className: 'col-sm-4'
    }, el(PluginList, this.props));
  }
});
const PluginList = createClass({
  displayName: 'Plugin List',
  render () {
    if (!this.props.plugins || this.props.plugins.length === 0) {
      return el('p', {
        className: 'plugin-list-loading'
      }, 'Loading plugins\u2026');
    }

    return el('ul', {
      className: 'plugin-list'
    }, this.props.plugins.map((plugin, index) => {
      return el(PluginListEntry, {
        key: index,
        index,
        selected: this.props.selectedPlugin === index,
        name: plugin.name,
        setSelection: this.props.setSelection
      });
    }));
  }
});
const PluginListEntry = createClass({
  handleClick () {
    this.props.setSelection(this.props.index);
  },
  render () {
    return el('li', {
      className: this.props.selected ? 'active' : '',
      onClick: this.handleClick
    }, this.props.name);
  }
});

// -----------------------
// Plugin Docs and Example
// -----------------------

// The plugin documentation and example pane
const PluginDocsSection = createClass({
  displayName: 'Plugin Docs Section',
  render () {
    const plugin = this.props.selectedPlugin;
    if (!plugin) {
      return el('section', { className: 'plugin-docs col-sm-8' },
                el('h2', null, 'Select a plugin'));
    }

    return el('section', { className: 'plugin-docs col-sm-8' },
              el(VideoJS),
              el('div', {
                className: 'panel panel-default'
              },
                 el('ul', {
                   className: 'plugin-info',
                 },
                    el('li', null,
                       'created on ' +
                       new Date(plugin.created).toLocaleDateString() +
                       ' by ' + plugin.author),
                    el('li', null,
                       'last updated ' +
                       new Date(plugin.modified).toLocaleDateString()),
                    el('li', null, plugin.downloads + ' downloads'))),
              el(PluginDocs, { plugin }));
  }
});

// A video.js player used to demonstrate plugins
const VideoJS = createClass({
  displayName: 'VideoJS Component',
  player: null,

  componentDidMount () {
    const video = document.createElement('video');
    video.controls = true;
    video.className = 'video-js plugin-preview-player';
    video.innerHTML = '<p class="vjs-no-js">' +
      'To view this video please enable JavaScript, and consider upgrading' +
      'to a web browser that ' +
      '<a href="http://videojs.com/html5-video-support/" target="_blank">' +
      'supports HTML5 video</a></p>';
    this.refs.placeholder.getDOMNode().appendChild(video);
    this.player = videojs(video, {
      width: 'auto',
      height: 'auto',
      sources: [
        { src: 'http://video-js.zencoder.com/oceans-clip.mp4', type: 'video/mp4' },
        { src: 'http://video-js.zencoder.com/oceans-clip.webm', type: 'video/webm' },
        { src: 'http://video-js.zencoder.com/oceans-clip.ogv', type: 'video/ogg' }
      ]
    });
  },
  componentWillUnmount () {
    this.player.dispose();
  },
  shouldComponentUpdate () {
    return false;
  },

  render () {
    return el('div', {
      className: 'videojs-container',
      ref: 'placeholder'
    });
  }
});

// The readme and stats for a plugin
const PluginDocs = createClass({
  displayName: 'Plugin Readme',

  fetchPluginDetails () {
    $.getJSON('/registry/' + this.props.plugin.name +'.json', (plugin) => {
      this.setState(plugin);
    })
  },

  // fetch the detailed plugin data
  componentDidMount () {
    this.fetchPluginDetails();
  },
  getInitialState () {
    return null;
  },
  render () {
    if (!this.state) {
      return el('div', { className: 'plugin-docs' }, 'Loading...');
    }

    if (this.state.name !== this.props.plugin.name) {
      this.fetchPluginDetails();
      return el('div', { className: 'plugin-docs' }, 'Loading...');
    }

    return el('div', {
      className: 'plugin-readme',
      dangerouslySetInnerHTML: {
        __html: marked(this.state.readme, { sanitize: true })
      }
    });
  }
});

// ---------------------
// Main Plugin Component
// ---------------------

const PluginComponent = createClass({
  displayName: 'Plugin Component',
  getInitialState () {
    return {
      selectedPlugin: -1,
      plugins: [],
      filteredPlugins: []
    };
  },

  componentDidMount () {
    // some time passes and we pull down the plugin list...
    setTimeout(() => {
      this.setState($.extend(model, {
        filteredPlugins: model.plugins
      }));
    }, 1000);
  },

  handleSelectionChange (selectedPlugin) {
    this.setState({ selectedPlugin });
  },

  filterPlugins (filteredPlugins) {
    this.setState({
      selectedPlugin: 0,
      filteredPlugins
    });
  },

  render () {
    return el('div', {
      className: 'row'
    }, el(PluginNavSection, {
      plugins: this.state.plugins,
      filterPlugins: this.filterPlugins
    }), el(PluginListSection, {
      selectedPlugin: this.state.selectedPlugin,
      plugins: this.state.filteredPlugins,
      setSelection: this.handleSelectionChange
    }), el(PluginDocsSection, {
      selectedPlugin: this.state.filteredPlugins[this.state.selectedPlugin]
    }));
  }
});

// render everything once to initialize the page
render(el(PluginComponent), document.querySelector('.container-fluid'));
