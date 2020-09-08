import styled from "@emotion/styled";
import { layout } from "styled-system";
import { GUTTER } from "./Inline";
import { flexbox } from "../styleFunctions";

const InlineItem = styled.div`
  ${flexbox}
  ${layout}
  &:not(:first-of-type) {
    padding-left: ${props => (props.gutter / 2)}px;
  }
  &:not(:last-of-type) {
    padding-right: ${props => (props.gutter / 2)}px;
  }
`;
InlineItem.defaultProps = {
  gutter: GUTTER
}

export default InlineItem;