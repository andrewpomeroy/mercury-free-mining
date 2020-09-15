import styled from '@emotion/styled';
import Color from 'color';
import { variant } from 'styled-system';
import css from '@emotion/css';

const getButtonColors = ({ color, theme }) => {
  switch (color) {
    case 'white':
      return {
        primary: theme.colors.white,
        hover: Color(theme.colors.white)
          .darken(0.25)
          .string(),
        active: Color(theme.colors.white)
          .darken(0.35)
          .string(),
        text: theme.colors.primary,
      };
    default:
      return {
        primary: theme.colors.primary,
        hover: Color(theme.colors.primary)
          .darken(0.25)
          .string(),
        active: Color(theme.colors.primary)
          .darken(0.35)
          .string(),
        text: theme.colors.lightText,
      };
  }
};

const buttonShadowBase = props => css`
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border: 1px solid ${getButtonColors(props).primary};
    color: ${getButtonColors(props).text};
    top: -1px;
    left: -1px;
    transition: 0ms transform;
    will-change: transform;
  }
`;

const buttonShadow = props => {
  return variant({
    prop: 'shadow',
    variants: {
      left: {
        '&:before': {
          transform: 'translate(-.666em, .666em)',
        },
        '&:active': {
          transform: 'translate(-1px, 1px)',
        },
        '&:active:before': {
          transform: 'translate(calc(-.666em + 1px), calc(.666em - 1px))',
        },
      },
      right: {
        '&:before': {
          transform: 'translate(.666em, .666em)',
        },
        '&:active': {
          transform: 'translate(1px, 1px)',
        },
        '&:active:before': {
          transform: 'translate(calc(.666em - 1px), calc(.666em - 1px))',
        },
      },
    },
  });
};

const buttonSize = props => {
  return variant({
    prop: 'size',
    variants: {
      smaller: {
        fontSize: 9,
      },
      small: {
        fontSize: 10,
      },
      medium: {
        fontSize: 12,
      },
      large: {
        fontSize: 14,
      },
      larger: {
        fontSize: 16,
      },
    },
  });
};

const Button = styled.button`
  display: inline-flex;
  position: relative;
  border-radius: 0;
  border: 0;
  font-family: inherit;
  font-weight: 600;
  font-size: 12px;
  ${buttonSize}
  padding: 1.25em 1.75em;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  background-color: ${props => getButtonColors(props).primary};
  border: 1px solid ${props => getButtonColors(props).primary};
  color: ${props => getButtonColors(props).text};
  cursor: pointer;
  transition: opacity 140ms, transform 0ms;
  transition-duration: 140ms, 0;
  transition-timing-function: linear;
  will-change: opacity;
  &:hover,
  &:focus {
    /* background-color: ${props => getButtonColors(props).hover}; */
    opacity: .8;
  }
  &:focus {
    outline: 0;
  }
  &:active {
    transition-duration: 0;
    transform: translateY(1px);
    /* background-color: ${props => getButtonColors(props).active}; */
    opacity: .9;
  }
  ${buttonShadowBase}
  ${buttonShadow}
`;
Button.defaultProps = {
  shadow: 'left',
};

export default Button;
