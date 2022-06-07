import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { StaticQuery, graphql } from 'gatsby';

const ProcessableImage = ({ filename, alt='', presentationWidth }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
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
        debugger;
        return null;
      }

      const imgProps = { alt, image: getImage(image.node.childImageSharp) };

      if (presentationWidth) {
        Object.assign(imgProps, {
          style: {
            margin: '0 auto',
            maxWidth: presentationWidth,
          },
        });
      }

      return <GatsbyImage {...imgProps} />;
    }}
  />
);

export default ProcessableImage;
