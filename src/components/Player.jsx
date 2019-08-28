import videojs from 'video.js';
import React from 'react';
import Helmet from 'react-helmet';

import { heroThemes } from '../utils/styles';

import 'video.js/dist/video-js.css';

class Player extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={node => (this.videoNode = node)}
            className={`video-js vjs-theme-${this.props.themeName}`}
          />
        </div>

        <Helmet>
          <link
            href={heroThemes[this.props.themeName].style}
            rel="stylesheet"
          />
        </Helmet>
      </div>
    );
  }
}

export default Player;
