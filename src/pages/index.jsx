import React from 'react';

import { heroThemes } from '../utils/styles';
import HomeTemplate from '../templates/HomeTemplate';

const themeKeys = Object.keys(heroThemes);

const randomTheme = () =>
  themeKeys[Math.floor(Math.random() * themeKeys.length)];

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      themeName: undefined,
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setState({ themeName: randomTheme() });
    }
  }
  render() {
    return <HomeTemplate pageContext={{ theme: this.state.themeName }} />;
  }
}

export default IndexPage;
