import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styled from '@emotion/styled';
import css from '@emotion/css';

const StyledImageWrap = styled.div`
  width: 100%;
  max-width: 33%;
  ${props => props.align && `float: ${props.align};`}
`;

const FloatImage = ({ image, alt, title, align, fluidimage }) => {
  console.log(JSON.parse(fluidimage));
  const fluid = JSON.parse(fluidimage);
  return (
    <StyledImageWrap align={align}>
      <Img
        src={image || ''}
        alt={alt || ''}
        title={title || ''}
        align={align}
        fluid={fluid}
      />
    </StyledImageWrap>
    // <Img fluid={fluid} />
  );
};

export default FloatImage;
