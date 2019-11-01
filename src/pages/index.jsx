import React from 'react';

import { heroThemes } from '../utils/styles';
import HomeTemplate from '../templates/HomeTemplate';

const THEME_TIME_SECONDS = 45;
const themeKeys = Object.keys(heroThemes);

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      themeName: themeKeys[0],
      currentThemeIndex: 0,
      transitionDuration: THEME_TIME_SECONDS,
    };
  }

  changeTheme() {
    this.timer = setTimeout(() => {
      this.setState(state => {
        const newIndex =
          state.currentThemeIndex >= themeKeys.length - 1
            ? 0
            : state.currentThemeIndex + 1;

        return {
          currentThemeIndex: newIndex,
          themeName: themeKeys[newIndex],
        };
      });

      this.changeTheme();
    }, THEME_TIME_SECONDS * 1000);
  }

  componentDidMount() {
    this.changeTheme();
  }

  onPlay = () => {
    window.history.pushState(
      {},
      this.state.themeName,
      `/${this.state.themeName}`
    );
    this.setState({ transitionDuration: false });
    this.cancelThemeChange();
  };

  cancelThemeChange = () => {
    clearTimeout(this.timer);
  };

  componentWillUnmount() {
    this.cancelThemeChange();
  }

  render() {
    return (
      <HomeTemplate
        pageContext={{ theme: this.state.themeName }}
        transitionDuration={this.state.transitionDuration}
        onPlay={this.onPlay}
      />
    );
  }
}

export default IndexPage;
