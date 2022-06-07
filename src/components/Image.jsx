import React from 'react';
import PassthroughImage from './PassthroughImage';
import ProcessableImage from './ProcessableImage';

const Image = ({ filename, ...props }) => {
  const ext = filename.split('.').slice(-1)[0];

  if (['jpg', 'jpeg', 'png'].includes(ext)) {
    return <ProcessableImage filename={filename} { ...props } />;
  } else if (['svg', 'gif'].includes(ext)) {
    return <PassthroughImage filename={filename} { ...props } />;
  } else {
    console.log(`Unknown file type ${filename}`);
  }
};

export default Image;
