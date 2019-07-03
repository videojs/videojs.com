import React from 'react';
import styled from 'styled-components';

import CheckboxInput from '../../CheckboxInput';
import RangeInput from '../../RangeInput';
import { media } from '../../../utils/styles';

const Form = styled.form`
  background-color: #fff;
  border: 0.125em solid #ebebeb;
  position: absolute;
  top: 0;
  left: 0;
  height: 14.57em;
  width: 19.94em;
  padding: 1.5em;
  z-index: 1;

  ${media.medLarge`
    top: -2em;
    left: -2em;
  `}

  ${media.wide`
    top: -3.4em;
    left: -6.2em;
  `}
`;

const CheckboxGroup = styled.span`
  display: inline-block;
  margin-right: 2em;
`;

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

  handleVolumeChange = (volume) => {
    this.setState({ volume }, () => {
      this.props.player.volume(volume / 100);
    });
  }

  handlePlaybackRateChange = (playbackRate) => {
    this.setState({ playbackRate }, () => {
      this.props.player.playbackRate(playbackRate);
    });
  }

  handleControlsChange = () => {
    this.setState(
      prevState => ({ controls: !prevState.controls }),
      () => this.props.player.controls(this.state.controls),
    );
  }

  handleFluidChange = () => {
    this.setState(
      prevState => ({ fluid: !prevState.fluid }),
      () => this.props.player.fluid(this.state.fluid),
    );
  }

  handleMuteChange = () => {
    this.setState(
      prevState => ({ muted: !prevState.muted }),
      () => this.props.player.muted(this.state.muted),
    );
  }

  handleLoopChange = () => {
    this.setState(
      prevState => ({ loop: !prevState.loop }),
      () => this.props.player.loop(this.state.loop),
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <RangeInput
          label="Volume"
          min={0}
          max={100}
          step={1}
          value={this.state.volume}
          onChange={this.handleVolumeChange}
        />

        <RangeInput
          label="Playback Rate"
          min={0}
          max={3}
          step={0.25}
          value={this.state.playbackRate}
          onChange={this.handlePlaybackRateChange}
        />

        <CheckboxGroup>
          <CheckboxInput
            label="Controls"
            checked={this.state.controls}
            onChange={this.handleControlsChange}
          />

          <CheckboxInput
            label="Fluid"
            checked={this.state.fluid}
            onChange={this.handleFluidChange}
          />
        </CheckboxGroup>

        <CheckboxGroup>
          <CheckboxInput
            label="Mute"
            checked={this.state.muted}
            onChange={this.handleMuteChange}
          />

          <CheckboxInput
            label="Loop"
            checked={this.state.loop}
            onChange={this.handleLoopChange}
          />
        </CheckboxGroup>
      </Form>
    );
  }
}

export default PlayerControls; 
