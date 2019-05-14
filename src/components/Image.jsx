import React from 'react';
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"

const Image = (props) => (
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
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) { return null; }

      // If there's no childImageSharp, we can assume it's an SVG and just pass it right on through
      if (!image.node.childImageSharp) {
        return (
          <img src={image.node.publicURL} alt={props.alt} />
        )
      }

      const imageSizes = image.node.childImageSharp.sizes;
      return (
        <Img
          alt={props.alt}
          sizes={imageSizes}
        />
      );
    }}
  />
)

export default Image;
