import $ from 'jquery';
import { createElement as el, render, createClass } from 'react';
import marked from 'marked';

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
    const plugins = this.props.plugins;

    if (!plugins || plugins.length === 0) {
      return el('ul', {
        className: 'plugin-list',
      }, el('li',
            { className: 'plugin-list-empty' }));
    }

    return el('ul', {
      className: 'plugin-list'
    }, plugins.map((plugin, index) => {
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
      className: 'plugin-entry ' + (this.props.selected ? 'active' : ''),
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
                el(VideoJS));
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
                       new Date(plugin.time.created).toLocaleDateString() +
                       ' by ' + plugin.author),
                    el('li', null,
                       'last updated ' +
                       new Date(plugin.time.modified).toLocaleDateString()),
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
      poster: '//www.videojs.com/img/poster.jpg',
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

  render () {
    if (!this.props.plugin) {
      return el('div', { className: 'plugin-docs' }, 'Loading...');
    }

    return el('div', {
      className: 'plugin-readme',
      dangerouslySetInnerHTML: {
        __html: marked(this.props.plugin.readme, { sanitize: true })
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
    // TODO replace me with the real extension data URL
    $.getJSON('/registry/extensions.json', (plugins) => {
      this.setState({
        plugins,
        filteredPlugins: plugins,
        selectedPlugin: 0
      });
    });
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
