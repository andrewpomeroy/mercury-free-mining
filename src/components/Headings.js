import styled from '@emotion/styled';
import css from '@emotion/css';

export const HeadingBase = css`
  margin: 0;
  line-height: 1.35em;
  color: ${props => props.theme.colors.heading};
`;

export const Heading1 = styled.h1`
  ${HeadingBase}
  .content &:not(:first-child) {
    font-size: ${props => props.theme.fontSizes.h1}px;
  }
`;
export const Heading2 = styled.h2`
  ${HeadingBase}
  .content &:not(:first-child) {
    font-size: ${props => props.theme.fontSizes.h2}px;
  }
`;
export const Heading3 = styled.h3`
  ${HeadingBase}
  .content &:not(:first-child) {
    font-size: ${props => props.theme.fontSizes.h3}px;
  }
`;
export const Heading4 = styled.h4`
  ${HeadingBase}
  .content &:not(:first-child) {
    font-size: ${props => props.theme.fontSizes.h4}px;
  }
`;
export const Heading5 = styled.h5`
  ${HeadingBase}
  .content &:not(:first-child) {
    font-size: ${props => props.theme.fontSizes.h5}px;
  }
`;
export const Heading6 = styled.h6`
  ${HeadingBase}
  .content &:not(:first-child) {
    font-size: ${props => props.theme.fontSizes.h6}px;
  }
`;
