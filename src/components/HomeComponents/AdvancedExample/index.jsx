import React from 'react';
import styled from 'styled-components';
import videojs from 'video.js';
import 'videojs-playlist';
import 'videojs-playlist-ui';
import 'videojs-mux';

import Container from '../../Container';
import MediaItems from './MediaItems';
import MediaPropertyItem from './MediaPropertyItem';
import MediaEventItem from './MediaEventItem';
import MediaProperties from './mediaProperties';
import MediaEvents from './mediaEvents';
import PlayerControls from './PlayerControls';
import playlist from './playlist';
import rectangles from '../../../images/footer-rectangles.svg';

import 'video.js/dist/video-js.css';
import 'videojs-playlist-ui/dist/videojs-playlist-ui.css';

const AdvancedExampleWrapper = styled.div`
  width: 100%;
  background-image: url(${rectangles});
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.25em;
`;

const Video = styled.video`
  flex: 3 1 70%;
  min-width: 300px;
  min-height: 150px;
  height: 0;
  position: relative;
`;

const PlaylistWrapper = styled.div`
  flex: 1 1 30%;
  position: relative;

  .vjs-playlist {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    height: 100%;
  }
`;

const MediaInfoWrapper = styled.div`
  display: flex;
`;

const MediaPropertiesItems = styled(MediaItems)`
  flex: 3 1 70%;
`;

const MediaEventsItems = styled(MediaItems)`
  flex: 1 1 30%;
`;

class AdvancedExample extends React.Component {
  constructor (...args) {
    super(...args);
    this.state = { isPlayerInitialized: false };
  }

  componentDidMount () {
    this.player = videojs(this.videoEl, {}, () => {
      if (this.player.hasPlugin('mux')) {
        this.player.mux({ data: {
          property_key: 'VJSISBEST',
        }});
      }
    });

    this.player.on('loadstart', () => {
      const pl = this.player.playlist();
      const plItem = pl[this.player.playlist.currentItem()];

      this.player.mux.emit('videochange', {
        video_id: plItem.id,
        video_title: plItem.name,
        video_duration: plItem.duration,
      });
    });

    this.player.playlist(playlist);
    this.player.playlistUi();

    this.setState({ isPlayerInitialized: true });
  }

  componentWillUnmount () {
    if (this.player) {
      this.player.dispose();
    }
  }

  render () {
    return (
      <AdvancedExampleWrapper>
        <Container>
          {this.state.isPlayerInitialized && (
            <PlayerControls player={this.player} />
          )}
          <VideoWrapper>
            <Video
              ref={(el) => { this.videoEl = el }}
              controls
              id="preview-player"
              preload="auto"
              crossOrigin="anonymous"
              className="video-js vjs-fluid"
            />
            <PlaylistWrapper> 
              <div className="vjs-playlist vjs-fluid" />
            </PlaylistWrapper>
          </VideoWrapper>
          {this.state.isPlayerInitialized && (
            <MediaInfoWrapper>
              <MediaPropertiesItems
                player={this.player}
                items={MediaProperties}
                itemComponent={MediaPropertyItem}
              />
              <MediaEventsItems
                player={this.player}
                items={MediaEvents}
                itemComponent={MediaEventItem}
              />
            </MediaInfoWrapper>
          )}
        </Container>
      </AdvancedExampleWrapper>
    );
  }
}

export default AdvancedExample;