import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styled from '@emotion/styled';

const StyledImageWrap = styled.div`
  width: 100%;
  max-width: 33%;
  ${props => props.align && `float: ${props.align};`}
`;

const FloatImage = ({ image, alt, title, align, fluidimage }) => {
  const fluid = fluidimage ? JSON.parse(fluidimage) : null;
  if (fluid) {
    return (
      <StyledImageWrap align={align}>
        <Img src={image} alt={alt} title={title} align={align} fluid={fluid} />
      </StyledImageWrap>
    );
  }
  if (image) {
    return (
      <StyledImageWrap align={align}>
        <img src={image} alt={alt} title={title} />
      </StyledImageWrap>
    );
  }
  return null;
};
FloatImage.displayName = 'FloatImage';

FloatImage.propTypes = {
  image: PropTypes.string.isRequired,
  fluidimage: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  align: PropTypes.string,
};

FloatImage.defaultProps = {
  alt: '',
  fluidimage: null,
  title: '',
  align: '',
};

export default FloatImage;
