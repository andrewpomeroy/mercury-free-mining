import {
  display,
  alignContent,
  alignItems,
  justifyItems,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order
} from "styled-system";
import { compose } from '@styled-system/core';

export const flexbox = compose(
  display,
  alignContent,
  alignItems,
  justifyItems,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order
);
