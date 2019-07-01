const MediaProperties = [
  {
    name: "error",
    updater: "error",
  }, {
    name: "src",
  }, {
    name: "currentSrc",
  }, {
    name: "crossOrigin",
    getter (player) {
      return player.tech_.el_.crossorigin;
    },
  }, {
    name: "networkState",
    updater: "",
  }, {
    name: "preload",
  }, {
    name: "buffered",
    updater: "",
  }, {
    name: "readyState",
    updater: "",
  }, {
    name: "seeking",
    updater: "",
  }, {
    name: "currentTime",
    updater: "timeupdate",
  }, {
    name: "duration",
    updater: "durationchange",
  }, {
    name: "paused",
    updater: ["pause", "play", "playing"],
  }, {
    name: "defaultPlaybackRate",
    getter (player) {
      return player.tech_.el_.defaultPlaybackRate;
    },
  }, {
    name: "playbackRate",
    updater: "ratechange",
  }, {
    name: "played",
    getter (player) {
      return player.tech_.el_.played;
    },
    updater: "timeupdate"
  }, {
    name: "seekable",
    updater: "progress",
  }, {
    name: "ended",
    updater: ["ended", "play"],
  }, {
    name: "autoplay",
  }, {
    name: "loop",
  }, {
    name: "controls",
  }, {
    name: "volume",
    updater: "volumechange",
  }, {
    name: "muted",
    updater: "volumechange",
  }, {
    name: "audioTracks",
    getter (player) {
      const at = player.audioTracks && player.audioTracks();
      return { length: at ? at.length : 0 };
    },
  }, {
    name: "videoTracks",
    getter (player) {
      const vt = player.videoTracks && player.videoTracks();
      return { length: vt ? vt.length : 0 };
    },
  }, {
    name: "textTracks",
    getter (player) {
      const tt = player.textTracks();
      return { length: tt ? tt.length : 0 };
    },
  }, {
    name: "width",
    updater: "resize",
  }, {
    name: "height",
    updater: "resize",
  }, {
    name: "currentWidth",
    updater: "resize",
  }, {
    name: "currentHeight",
    updater: "resize",
  }, {
    name: "videoWidth",
  }, {
    name: "videoHeight",
  }, {
    name: "poster",
  }, {
    name: "readyState",
    updater: "loadeddaata",
  },
];

export default MediaProperties;
