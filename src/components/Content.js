import React from 'react';
import PropTypes from 'prop-types';

import rehypeReact from 'rehype-react';
import FloatImage from './FloatImage';
import {
  BlogHeading1,
  BlogHeading2,
  BlogHeading3,
  BlogHeading4,
  BlogHeading5,
  BlogHeading6,
} from './BlogHeadings';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'float-image': FloatImage,
    h1: BlogHeading1,
    h2: BlogHeading2,
    h3: BlogHeading3,
    h4: BlogHeading4,
    h5: BlogHeading5,
    h6: BlogHeading6,
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
