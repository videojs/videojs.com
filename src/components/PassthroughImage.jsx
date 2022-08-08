import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const PassthroughImage = ({ filename, alt='' }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: {extension: {regex: "/(gif)|(svg)/"}}) {
          edges {
            node {
              relativePath
              publicURL
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath === filename;
      });

      if (!image) {
        return null;
      }

      return <img src={image.node.publicURL} alt={alt} loading="lazy" />;
    }}
  />
); 

export default PassthroughImage;
