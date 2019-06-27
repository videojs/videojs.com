import React from 'react';
import shortid from 'shortid';

const buildInputId = (name, id) => `${name}_${id}`; 

class PlayerControls extends React.Component {
  constructor (...args) {
    super(...args);

    this.state = {
      volume: 100,
      playbackRate: 1,
      controls: true,
      fluid: true,
      muted: false,
      loop: false,
    };
  }

  componentDidMount () {
    const { player } = this.props;
    const events = ['loadstart', 'loadedmetadata'];

    player.on(events.concat('volumechange'), () => this.setState({
      volume: player.volume() * 100,
      muted: player.muted(),
    }));

    player.on(events.concat('ratechange'), () => this.setState({
      playbackRate: player.playbackRate(),
    }));

    player.on(events, () => this.setState({
      loop: player.loop(),
      fluid: player.fluid(),
      controls: player.controls(),
    }));

    player.on('controlsenabled', () => this.setState({ controls: true }));
    player.on('controlsdisabled', () => this.setState({ controls: false }));
  }

  handleVolumeChange = (e) => {
    const volume = e.target.value;
    this.setState({ volume });
    this.props.player.volume(volume / 100);
  }

  handlePlaybackRateChange = (e) => {
    const playbackRate = e.target.value;
    this.setState({ playbackRate });
    this.props.player.playbackRate(playbackRate);
  }

  handleControlsChange = (e) => {
    const controls = e.target.checked;
    this.setState({ controls });
    this.props.player.controls(controls);
  }

  handleFluidChange = (e) => {
    const fluid = e.target.checked;
    this.setState({ fluid });
    this.props.player.fluid(fluid);
  }

  handleMuteChange = (e) => {
    const muted = e.target.checked;
    this.setState({muted});
    this.props.player.muted(muted);
  }

  handleLoopChange = (e) => {
    const loop = e.target.checked;
    this.setState({ loop });
    this.props.player.loop(loop);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  render () {
    const id = shortid.generate();
    const volumeInputId = buildInputId('volume', id);
    const playbackRateInputId = buildInputId('playbackrate', id);
    const controlsInputId = buildInputId('controls', id);
    const fluidInputId = buildInputId('fluid', id);
    const mutedInputId = buildInputId('muted', id);
    const loopInputId = buildInputId('loop', id);

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor={volumeInputId}>Volume</label>
          <span>{this.state.volume}</span>
          <input id={volumeInputId} type="range"
                 min="0" max="100" step="1" value={this.state.volume}
                 onChange={this.handleVolumeChange} />
        </fieldset>

        <fieldset>
          <label htmlFor={playbackRateInputId}>Playback Rate</label>
          <span>{this.state.playbackRate}</span>
          <input id={playbackRateInputId} type="range"
                 min="0" max="3" step="0.25" value={this.state.playbackRate}
                 onChange={this.handlePlaybackRateChange} />
        </fieldset>

        <fieldset>
          <label htmlFor={controlsInputId}>
            <input id={controlsInputId} type="checkbox" checked={this.state.controls}
                   onChange={this.handleControlsChange} />
            Controls
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor={fluidInputId}>
            <input id={fluidInputId} type="checkbox" checked={this.state.fluid}
                   onChange={this.handleFluidChange} />
            Fluid
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor={mutedInputId}>
            <input id={mutedInputId} type="checkbox" checked={this.state.muted}
                   onChange={this.handleMuteChange} />
            Mute
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor={loopInputId}>
            <input id={loopInputId} type="checkbox" checked={this.state.loop}
                   onChange={this.handleLoopChange} />
            Loop
          </label>
        </fieldset>
      </form>
    );
  }
}

export default PlayerControls; 
