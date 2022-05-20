import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { StaticQuery, graphql } from 'gatsby';

/*
(filter: {extension: {regex: "/(gif)|(jpg)|(jpeg)|(png)/"}})
*/

const Image = ({ filename, alt, fluid, presentationWidth }) => (
  <StaticQuery
    query={graphql`
  query {
    images: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
      edges {
        node {
          relativePath
          name
          publicURL
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
  `}
    render={data => {
      window.imagecount = window.imagecount || 0;
      window.imagecount++;
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename);
      });
      if (!image) {
        return null;
      }

      // If there's no childImageSharp, we can assume it's an SVG and just pass it right on through
      if (!image.node.childImageSharp) {
        return <img src={image.node.publicURL} alt={alt} />;
      }

      // const imageSizes = image.node.childImageSharp.sizes;
      const imageFixed = image.node.childImageSharp.gatsbyImageData;
      const imageFluid = image.node.childImageSharp.fluid;

      const imgProps = { image: getImage(image.node), alt };

      if (fluid) {
        Object.assign(imgProps, { fluid: imageFluid });
      } else {
        Object.assign(imgProps, { fixed: imageFixed });
      }

      if (presentationWidth) {
        Object.assign(imgProps, {
          style: {
            margin: '0 auto',
            maxWidth: presentationWidth,
          },
        });
      }

      if (filename.toLowerCase().startsWith('ign')) {
        console.log(imgProps);
        debugger;
      }

      return <GatsbyImage {...imgProps} />;
    }}
  />
);

export default Image;
