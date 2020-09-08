import styled from "@emotion/styled";
import { Link as GatsbyLink } from 'gatsby';
import Color from 'color';
import {
  system,
} from 'styled-system';
import themeGet from '@styled-system/theme-get';

// export const makeLinkColors = function (color, { lighten = .1, darken = .1 }) {
//   console.log(Color);
//   return `
//     color: ${color};
//     &:hover, &:focus {
//       color: ${Color(color).lighten(lighten).string()}
//     }
//     &:active {
//       color: ${Color(color).lighten(darken).string()}
//     }
//   `
// };

const Link = styled(GatsbyLink)`
  /* color: ${props => props.color || props.theme.colors.link};
  &:hover, &:focus {
    color: ${props => Color(props.color || props.theme.colors.link).lighten(.1).string()};
  } */
  font-weight: 600;
  ${system(({
      color: {
        property: 'color',
        scale: 'colors',
      },
  }))}
  &:hover, &:focus {
    ${system(({
      color: {
        property: 'color',
        scale: 'colors',
        transform: (value, scale) => {
          const color = scale[value] || scale['link'];
          return Color(color).lighten(.25).string();
        }
      },
    }))}
    &:active {
      ${system(({
        color: {
          property: 'color',
          scale: 'colors',
          transform: (value, scale) => {
            const color = scale[value] || scale['link'];
            return Color(color).darken(.15).string();
          }
        },
      }))}
    }
  }
`;

export default Link;