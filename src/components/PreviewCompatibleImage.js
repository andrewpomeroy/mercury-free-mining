import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const PreviewCompatibleImage = ({ imageInfo }, { align }) => {
  const imageStyle = { borderRadius: '5px' };
  const { alt = '', childImageSharp, image } = imageInfo;

  const GatsbyImage = styled(Img)`
    ${props => props.align && `float: ${props.align};`}
  `;

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        style={imageStyle}
        fluid={image.childImageSharp.fluid}
        alt={alt}
        align={align}
      />
    );
  }

  if (childImageSharp) {
    return (
      <GatsbyImage
        style={imageStyle}
        fluid={childImageSharp.fluid}
        alt={alt}
        align={align}
      />
    );
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />;

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
