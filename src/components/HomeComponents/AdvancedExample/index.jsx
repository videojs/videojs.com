import React from 'react';
import styled from 'styled-components';
import videojs from 'video.js';
import queryString from 'query-string';

import { P } from '../../Typography';
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

const AdvancedExampleContainer = styled.div`
  display: none;

  ${({ theme }) => theme.media.xLarge`
    display: block;
  `}
`;

const PlaylistPluginDescContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 2.2em;

  > * {
    width: 33%;
  }

  & {
    ${({ theme }) => theme.media.xLarge`
      padding-top: 12.5em;
    `}
  }
`;

const StyledSectionHeader = styled(SectionHeader)`
  margin: 0;
`;

const PlayerBackground = styled.div`
  width: 100%;
  background-image: url(${rectangles});
`;

const PlayerContainer = styled(Container)`
  ${({ theme }) => theme.media.medLarge`
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
  constructor(...args) {
    super(...args);
    this.state = { isPlayerInitialized: false };
  }

  setQueryParam(plItemId) {
    if (!this.props.enableThemeQueryParam) return;
    const params = new URLSearchParams(window.location.search);
    params.set('video', plItemId);
    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${params.toString()}`
    );
  }

  componentDidMount() {
    this.player = videojs(this.videoEl, {}, () => {
      if (this.player.hasPlugin('mux')) {
        this.player.mux({
          data: {
            property_key: 'VJSISBEST',
          },
        });
      }
    });

    this.player.on('loadstart', () => {
      const pl = this.player.playlist();
      const plItem = pl[this.player.playlist.currentItem()];
      this.setQueryParam(plItem.id);
      this.player.mux.emit('videochange', {
        video_id: plItem.id,
        video_title: plItem.name,
        video_duration: plItem.duration,
      });
    });

    const videoParam = queryString.parse(window.location.search).video;
    let currentVideo;
    if (this.props.enableThemeQueryParam) {
      const index = playlist.findIndex(plItem => plItem.id === videoParam);
      if (index !== -1) currentVideo = index;
    }

    this.player.playlist(playlist, currentVideo);
    this.player.playlistUi();

    this.setState({ isPlayerInitialized: true });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <AdvancedExampleContainer>
        <PlaylistPluginDescContainer>
          {!this.props.hideDescription && (
            <>
              <StyledSectionHeader
                desktopAlign="left"
                title="Example"
                tagline="Playlist plugin"
              />
              <P>
                The advanced example includes the playlist plugin, along with
                some useful details such as what all of the player properties
                are, and what events have fired and how often.
              </P>
            </>
          )}
        </PlaylistPluginDescContainer>
        <PlayerBackground>
          <PlayerContainer>
            <ControlsWrapper>
              {this.state.isPlayerInitialized && (
                <PlayerControls player={this.player} />
              )}
              <VideoWrapper>
                <Video
                  ref={el => {
                    this.videoEl = el;
                  }}
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
      </AdvancedExampleContainer>
    );
  }
}

export default AdvancedExample;
