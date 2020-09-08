import { INLINE_GUTTER } from "./Inline";
import styled from "@emotion/styled";

const InlineItem = styled.div`
  &:not(:first-of-type) {
    padding-left: ${INLINE_GUTTER / 2}px;
  }
  &:not(:last-of-type) {
    padding-right: ${INLINE_GUTTER / 2}px;
  }
`;

export default InlineItem;