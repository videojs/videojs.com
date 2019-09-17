import React from 'react';
import styled from 'styled-components';

const ExampleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const ExampleEmbed = styled.div`
  flex: 0 0 100%;
  padding: 0 0 2em 0;

  ${({ theme }) => theme.media.medLarge`
    flex: 0 0 70%;
    margin: 0 auto;
    padding: 1em;
  `}

  ${({ theme }) => theme.media.xLarge`
    flex: 3;
  `}
`;

const ExampleSelector = styled.div`
  flex: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${({ theme }) => theme.media.xLarge`
    flex: 2;
  `}
`;

const ExampleBlock = styled(props => (
  <div className={props.className} onClick={props.onClick}>
    <div className="example-block-content">{props.children}</div>
  </div>
))`
  border: solid 2px #ebebeb;
  margin: 1em;
  display: flex;
  flex: 0 0 40%;
  cursor: pointer;
  padding: 3em 1em;

  &:hover {
    border-color: ${props => props.theme.currentTheme.color};
  }

  .example-block-content {
    width: 75%;
    margin: auto;
  }

  ${({ theme }) => theme.media.medLarge`
    flex: 0 0 20%;
  `}

  ${({ theme }) => theme.media.xLarge`
    flex: 1 0 40%;
  `}
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
