import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from '../Image';

const Wrapper = styled.div`
  display: block;
  border: 0.125em solid #ebebeb;
  margin-bottom: 2.5em;
`;

const Heading = styled.div`
  background-color: #f9f9f9;
  border-bottom: 0.125em solid #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.56em 2.1em;
`;

const PluginName = styled.h3`
  color: #000;
  font-size: 18px;
`;

const PluginDescription = styled.div`
  padding: 2.2em 2.1em 2.8em;
`;

const PluginStats = styled.div`
  display: flex;
`;

const PluginStatInfo = styled.span`
  display: flex;
  align-items: center;
  font-size: 16px;

  &:not(:last-child) {
    margin-right: 2.8125em;
  }

  img {
    display: inline-block;
    height: 1em;
    margin-right: 0.625em;
  }

  span {
    color: rgba(0, 0, 0, 0.3);
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.05em;
  }
`;

const PluginsListItem = ({ name, version, downloads, description }) => (
  <Wrapper>
    <Heading>
      <a
        href={`https://npmjs.org/package/${name}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <PluginName>{name}</PluginName>
      </a>
      <PluginStats>
        <PluginStatInfo>
          <Image filename="download-solid.svg" />
          <span>{downloads}</span>
        </PluginStatInfo>
        <PluginStatInfo>
          <Image filename="tag-solid.svg" />
          <span>{version}</span>
        </PluginStatInfo>
      </PluginStats>
    </Heading>
    <PluginDescription>{description}</PluginDescription>
  </Wrapper>
);

PluginsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  downloads: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PluginsListItem;
