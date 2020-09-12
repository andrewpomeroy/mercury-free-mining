import React from 'react';
import PropTypes from 'prop-types';

import rehypeReact from 'rehype-react';
import styled from '@emotion/styled';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import FloatImage from './FloatImage';

export const Derp = styled.h1`
  color: red !important;
`;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    derp: Derp,
    'float-image': FloatImage,
  },
}).Compiler;

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export const HTMLAstContent = ({ content, className }) => (
  <div className={className}>{renderAst(content)}</div>
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
