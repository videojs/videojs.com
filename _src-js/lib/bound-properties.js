import React from 'react';
import ReactDOM from 'react-dom'
import videojs from 'video.js';
import shortid from 'shortid';

const Form = React.createClass({
  getInitialState() {
    return {
      volume: 100,
      playbackRate: 1,
      controls: true,
      fluid: true,
      muted: false,
      loop: false
    }
  },

  componentDidMount() {
    const player = this.props.player;
    const events = ['loadstart', 'loadedmetadata'];

    player.on(events.concat('volumechange'), () => this.setState({volume: player.volume() * 100, muted: player.muted()}));
    player.on(events.concat('ratechange'), () => this.setState({playbackRate: player.playbackRate()}));
    player.on(events, () => this.setState({
      loop: player.loop(),
      fluid: player.fluid(),
      controls: player.controls()
    }));
    player.on('controlsenabled', () => this.setState({controls: true}));
    player.on('controlsdisabled', () => this.setState({controls: false}));
  },

  handleVolumeChange(e) {
    const volume = e.target.value;
    this.setState({volume});
    this.props.player.volume(volume/100);
  },

  handlePlaybackRateChange(e) {
    const playbackRate = e.target.value;
    this.setState({playbackRate});
    this.props.player.playbackRate(playbackRate);
  },

  handleControlsChange(e) {
    const controls = e.target.checked;
    this.setState({controls});
    player.controls(controls);
  },

  handleFluidChange(e) {
    const fluid = e.target.checked;
    this.setState({fluid});
    player.fluid(fluid);
  },

  handleMuteChange(e) {
    const muted = e.target.checked;
    this.setState({muted});
    player.muted(muted);
  },

  handleLoopChange(e) {
    const loop = e.target.checked;
    this.setState({loop});
    player.loop(loop);
  },

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  },

  render() {
    const id = shortid.generate();
    return (
      <form className="bound-props-form" onSubmit={this.handleSubmit}>
        <fieldset className="form-group slider-volume">
          <label for={"volume_"+id} className="slider-name">Volume</label>
          <span className="slider-value">{this.state.volume}</span>
          <input id={"volume_"+id} type="range"
                 min="0" max="100" step="1" value={this.state.volume}
                 onChange={this.handleVolumeChange} />
        </fieldset>

        <fieldset className="form-group slider-playbackrate">
          <label for={"playbackrate_"+id} className="slider-name">Playback Rate</label>
          <span className="slider-value">{this.state.playbackRate}</span>
          <input id={"playbackrate_"+id} type="range"
                 min="0" max="3" step="0.25" value={this.state.playbackRate}
                 onChange={this.handlePlaybackRateChange} />
        </fieldset>

        <fieldset className="form-group checkbox checkbox-controls">
          <label for={"controls_"+id} className="checkbox-name">
            <input id={"controls_"+id} type="checkbox" checked={this.state.controls}
                   onChange={this.handleControlsChange} />
            Controls
          </label>
        </fieldset>

        <fieldset className="form-group checkbox checkbox-fluid">
          <label for={"fluid_"+id} className="checkbox-name">
            <input id={"fluid_"+id} type="checkbox" checked={this.state.fluid}
                   onChange={this.handleFluidChange} />
            Fluid
          </label>
        </fieldset>

        <fieldset className="form-group checkbox checkbox-muted">
          <label for={"muted_"+id} className="checkbox-name">
            <input id={"muted_"+id} type="checkbox" checked={this.state.muted}
                   onChange={this.handleMuteChange} />
            Mute
          </label>
        </fieldset>

        <fieldset className="form-group checkbox checkbox-loop">
          <label for={"loop_"+id} className="checkbox-name">
            <input id={"loop_"+id} type="checkbox" checked={this.state.loop}
                   onChange={this.handleLoopChange} />
            Loop
          </label>
        </fieldset>
      </form>
    );
  }
});

export default function(player) {
  ReactDOM.render(
    <Form player={player} />,
    document.querySelector('.bound-properties')
  )
};
