import React from 'react';
import styled from 'styled-components';
import videojs from 'video.js';

import Container from '../../Container';
import SectionHeader from '../../SectionHeader';
import MediaItems from './MediaItems';
import MediaPropertyItem from './MediaPropertyItem';
import MediaEventItem from './MediaEventItem';
import MediaProperties from './mediaProperties';
import MediaEvents from './mediaEvents';
import PlayerControls from './PlayerControls';
import PlayerPlaylist from './PlayerPlaylist';
import playlist from './playlist';
import rectangles from '../../../images/footer-rectangles.svg';
import { media } from '../../../utils/styles';

const PlaylistPluginDescContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 2.2em;

  > * {
    width: 33%;

    &:not(:last-child) {
      margin-bottom: 1.5em;
    }
  }
`;

const StyledSectionHeader = styled(SectionHeader)`
  margin: 0;
`;

const PlaylistPluginDesc = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: 300;
  line-height: 2.14;
  opacity: 0.6;
`;

const PlayerBackground = styled.div`
  width: 100%;
  background-image: url(${rectangles});
`;

const PlayerContainer = styled(Container)`
  ${media.medLarge`
    padding-top: 0;
    padding-bottom: 0;
  `}
`;

const ControlsWrapper = styled.div`
  position: relative;
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.25em;
`;

const Video = styled.video`
  flex: 3 1 75%;
  min-width: 300px;
  min-height: 150px;
  height: 0;
  position: relative;
`;

const MediaInfoWrapper = styled.div`
  display: flex;
`;

const MediaPropertiesItems = styled(MediaItems)`
  flex: 3 1 75%;
`;

const MediaEventsItems = styled(MediaItems)`
  flex: 1 1 25%;
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
      <>
        <PlaylistPluginDescContainer>
          <StyledSectionHeader left title="Example" tagline="Playlist plugin" />
          <PlaylistPluginDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
          </PlaylistPluginDesc>
        </PlaylistPluginDescContainer>
        <PlayerBackground>
          <PlayerContainer>
            <ControlsWrapper>
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
                <PlayerPlaylist />
              </VideoWrapper>
            </ControlsWrapper>
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
          </PlayerContainer>
        </PlayerBackground>
      </>
    );
  }
}

export default AdvancedExample;
