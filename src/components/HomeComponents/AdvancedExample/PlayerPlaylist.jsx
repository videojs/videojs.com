import React from 'react';
import styled from 'styled-components';

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

const Playlist = () => (
  <PlaylistWrapper>
    <div className="vjs-playlist vjs-fluid" />
  </PlaylistWrapper>
);

export default Playlist;
