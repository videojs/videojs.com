import React from 'react';
import shortid from 'shortid';

const MediaItems = ({ player, items, itemComponent: Item }) => (
  <ul className="list">
    {items.map((item) => (
      <Item key={shortid.generate()} item={item} player={player} />
    ))}
  </ul>
);

export default MediaItems;
