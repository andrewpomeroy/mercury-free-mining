import styled from "@emotion/styled";

export const INLINE_GUTTER = 16;

const Inline = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -${INLINE_GUTTER / 2}px;
  margin-right: -${INLINE_GUTTER / 2}px;
`;

export default Inline;