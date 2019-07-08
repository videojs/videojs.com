import React from 'react';
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"

const Image = ({ filename, alt, fluid, presentationWidth }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              publicURL
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) { return null; }

      // If there's no childImageSharp, we can assume it's an SVG and just pass it right on through
      if (!image.node.childImageSharp) {
        return (
          <img src={image.node.publicURL} alt={alt} />
        )
      }

      const imageSizes = image.node.childImageSharp.sizes;
      const imageFluid = image.node.childImageSharp.fluid;

      const imgProps = { alt, style: { margin: '0 auto', width: 'auto' } };

      if (fluid) {
        Object.assign(imgProps, { fluid: imageFluid });
      } else {
        Object.assign(imgProps, { sizes: imageSizes });
      }

      if (presentationWidth) {
        Object.assign(imgProps, { style: {
          margin: '0 auto',
          maxWidth: presentationWidth,
        } });
      }

      return (
        <Img {...imgProps} />
      );
    }}
  />
)

export default Image;
