import React from 'react';

const PluginsList = ({ plugins }) => (
  <ul>
    {plugins.map(p => <li>{p.name}</li>)}
  </ul>
);

export default PluginsList;
