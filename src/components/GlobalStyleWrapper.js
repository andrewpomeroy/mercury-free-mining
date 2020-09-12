import React from 'react';
import styled from '@emotion/styled';

const GlobalStyleWrapper = styled.div`
  font-family: ${props => props.theme.fontFamilies.body};
  color: ${props => props.theme.colors.text};
`;

export default GlobalStyleWrapper;
