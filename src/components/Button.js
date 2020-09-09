import styled from "@emotion/styled";
import Color from 'color';
import { variant } from 'styled-system';

const buttonSize = props => {
  return variant({
    prop: 'size',
    variants: {
      smaller: {
        fontSize: 9
      },
      small: {
        fontSize: 10
      },
      medium: {
        fontSize: 12
      },
      large: {
        fontSize: 14
      },
      larger: {
        fontSize: 16
      }
    }
  });
}

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
  letter-spacing: .12em;
  background-color: #bb9b5c;
  border: 1px solid #bb9b5c;
  color: white;
  cursor: pointer;
  
  transition: opacity 140ms, transform 0ms;
/*   transition-property: background-color, color; */
  transition-property: opacity, transform;
  transition-duration: 140ms, 0;
  transition-timing-function: linear;
  will-change: opacity;
`

export default Button;