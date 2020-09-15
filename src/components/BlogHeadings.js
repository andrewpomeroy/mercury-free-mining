import React from 'react';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from './Headings';

export const BlogHeading1 = ({ children, ...props }) => (
  <Heading1 as="h2">{children}</Heading1>
);
export const BlogHeading2 = ({ children, ...props }) => (
  <Heading2 as="h3">{children}</Heading2>
);
export const BlogHeading3 = ({ children, ...props }) => (
  <Heading3 as="h4">{children}</Heading3>
);
export const BlogHeading4 = ({ children, ...props }) => (
  <Heading4 as="h5">{children}</Heading4>
);
export const BlogHeading5 = ({ children, ...props }) => (
  <Heading5 as="h6">{children}</Heading5>
);
export const BlogHeading6 = ({ children, ...props }) => (
  <Heading6 as="h6">{children}</Heading6>
);
