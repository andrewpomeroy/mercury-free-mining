import React from 'react';
import { Link } from 'gatsby';
import Button from './Button';

const LinkButton = React.forwardRef(({children, ...props}, ref) => <Button as={Link} ref={ref} {...props}>{children}</Button>);

export default LinkButton;