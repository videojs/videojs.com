import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const MediaItems = ({ className, player, items, itemComponent: Item }) => (
  <Ul className={className}>
    {items.map((item) => (
      <Item key={shortid.generate()} item={item} player={player} />
    ))}
  </Ul>
);

MediaItems.propTypes = {
  className: PropTypes.string,
  player: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  itemComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
};

export default MediaItems;
