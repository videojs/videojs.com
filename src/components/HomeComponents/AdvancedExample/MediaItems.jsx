import React from 'react';
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

export default MediaItems;
