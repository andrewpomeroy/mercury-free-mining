import React from 'react';
import PropTypes from 'prop-types';

import rehypeReact from "rehype-react";
import styled from '@emotion/styled';

export const Derp = styled.h1`
  color: red !important;
`
// export const Derp = () => (
//   <>youtube 0w5CPJ4FQ-0</>
// )
  
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "derp": Derp },
}).Compiler

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);
  
export const HTMLAstContent = ({ content, className }) => (
  <div className={className}>
      {renderAst(content)}
  </div>
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
