import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const FloatImageUI = styled.img`
  ${props => props.align && `float: ${props.align};`}
`;

const FloatImage = ({ alt, src, title, align }) => (
  <FloatImageUI
    src={src || ''}
    alt={alt || ''}
    title={title || ''}
    align={align}
  />
);

FloatImage.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

export default FloatImage;
