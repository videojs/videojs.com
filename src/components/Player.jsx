import videojs from 'video.js';
import React from 'react';

import 'video.js/dist/video-js.css';

import { heroThemes } from '../utils/styles';

Object.keys(heroThemes).map(theme =>
  require(`@videojs/themes/dist/${theme}/index.css`)
);

class Player extends React.Component {
  componentDidMount() {
    // Extend the options with some defaults.
    const options = {
      html5: {
        hls: {
          overrideNative: !videojs.browser.IS_SAFARI,
        },
      },
      ...this.props,
    };
    this.player = videojs(this.videoNode, options, function onPlayerReady() {
      // console.log('onPlayerReady', this);
    });

    this.player.addClass(`vjs-theme-${this.props.themeName}`);

    this.player.on('play', this.props.onPlay);
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.themeName !== this.props.themeName) {
      this.player.removeClass(`vjs-theme-${this.props.themeName}`);
      this.player.addClass(`vjs-theme-${nextProps.themeName}`);

      this.player.src(nextProps.sources);
      this.player.poster(nextProps.poster);
    }
  }
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={node => (this.videoNode = node)}
            className="video-js vjs-16-9"
            playsInline={this.props.playsInline}
          />
        </div>
      </div>
    );
  }
}

export default Player;
