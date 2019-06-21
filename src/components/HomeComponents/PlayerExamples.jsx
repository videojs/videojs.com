import React from 'react';
import styled from 'styled-components';

const ExampleContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ExampleEmbed = styled.div`
  flex: 3;
  padding: 1em;

  & > * {
    width: 650px;
    height: 365.625px;
  }
`;

const ExampleSelector = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
`;

const ExampleBlock = styled(props => (
  <div className={props.className} onClick={props.onClick}>
    <div className="example-block-content">{props.children}</div>
  </div>
))`
  border: solid 2px #ebebeb;
  margin: 1em;
  flex: 1 0 40%;
  display: flex;
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme.currentTheme.color};
  }

  .example-block-content {
    width: 75%;
    margin: auto;
  }
`;

class PlayerExamples extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
    };
  }

  setActive = index => () => {
    this.setState({ active: index });
  };

  currentExample() {
    return this.props.examples[this.state.active];
  }

  render() {
    const Embed = this.currentExample().embed;

    return (
      <ExampleContainer>
        <ExampleEmbed>
          <Embed />
        </ExampleEmbed>
        <ExampleSelector>
          {this.props.examples.map(({ logo: Logo, name }, i) => (
            <ExampleBlock key={name} onClick={this.setActive(i)}>
              <Logo />
            </ExampleBlock>
          ))}
        </ExampleSelector>
      </ExampleContainer>
    );
  }
}

export default PlayerExamples;
