import React from 'react';
import styled from 'styled-components';
import videojs from 'video.js';
import 'videojs-playlist';
import 'videojs-playlist-ui';
import 'videojs-mux';

import Container from '../../Container';
import SectionHeader from '../../SectionHeader';
import MediaItems from './MediaItems';
import MediaPropertyItem from './MediaPropertyItem';
import MediaEventItem from './MediaEventItem';
import MediaProperties from './mediaProperties';
import MediaEvents from './mediaEvents';
import PlayerControls from './PlayerControls';
import playlist from './playlist';
import rectangles from '../../../images/footer-rectangles.svg';
import { media } from '../../../utils/styles';

import 'video.js/dist/video-js.css';
import 'videojs-playlist-ui/dist/videojs-playlist-ui.css';

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5em;
`;

const TestItOutWrapper = styled.div`
  position: relative;
  flex-basis: 67%;
  display: flex;
  align-items: flex-end;
  color: rgba(0, 0, 0, 0.3);
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;

  p {
    position: absolute;
    left: 0;

    ${media.medLarge`
      left: -2.6em;
    `}

    ${media.wide`
      left: -8.2em;
    `}
  }
`;

const SectionHeaderWrapper = styled.div`
  flex-basis: 33%;
`;

const P = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  font-weight: 300;
  line-height: 2.14;
  opacity: 0.6;
  margin-bottom: 1em;
`;

const Wrapper = styled.div`
  width: 100%;
  background-image: url(${rectangles});
`;

const StyledContainer = styled(Container)`
  ${media.medLarge`
    padding-top: 0;
    padding-bottom: 0;
  `}
`;

const ControlsWrapper = styled.div`
  position: relative;
`;

const PlayerWrapper = styled.div`
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

const PlaylistWrapper = styled.div`
  flex: 1 1 25%;
  position: relative;

  .vjs-playlist {
    background: transparent;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    height: 100%;

    .vjs-playlist-item {
      margin-left: 1em;
      height: 9em;
      outline: none;

      &:not(:first-child) {
        margin-top: 1em;
      }

      &.vjs-selected {
        background: transparent;

        img {
          opacity: 1;
        }

        .vjs-playlist-now-playing-text {
          background-color: #000;
          border-radius: 0.5em;
          color: #fff;
          font-size: 13px;
          font-weight: bold;
          top: 1em;
          left: 1.5em;
          margin: 0;
          padding: 0.2em 0.8em;
        }
      }

      .vjs-playlist-title-container {
        padding: 1em 1.2em;
      }

      .vjs-up-next-text,
      .vjs-playlist-name {
        font-size: 13px;
        font-weight: bold;
        padding: 0;
      }

      .vjs-up-next-text {
        text-transform: none;
      }

      .vjs-playlist-duration {
        top: 1em;
        left: 1.5em;
        background-color: #fff;
        border-radius: 0.5em;
        color: #000;
        font-size: 13px;
        font-weight: bold;
        padding: 0.2em 0.8em;
      }

      picture {
        height: 100%;
      }

      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }
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
      <div>
        <Container>
          <Description>
            <TestItOutWrapper><p>test it out</p></TestItOutWrapper>
            <SectionHeaderWrapper>
              <SectionHeader left title="Example" tagline="Playlist plugin" />
              <P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </P>
            </SectionHeaderWrapper>
          </Description>
        </Container>
        <Wrapper>
          <StyledContainer>
            <ControlsWrapper>
              {this.state.isPlayerInitialized && (
                <PlayerControls player={this.player} />
              )}
              <PlayerWrapper>
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
              </PlayerWrapper>
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
          </StyledContainer>
        </Wrapper>
      </div>
    );
  }
}

export default AdvancedExample;
