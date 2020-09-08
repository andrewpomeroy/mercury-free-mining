import styled from "@emotion/styled";
import { layout } from "styled-system";
import { flexbox } from "../styleFunctions";

export const GUTTER = 16;

const Inline = styled.div`
  ${flexbox}
  ${layout}
  margin-left: ${props => (-1 * (props.gutter / 2))}px;
  margin-right: ${props => (-1 * (props.gutter / 2))}px;
`;
Inline.defaultProps = {
  display: "flex",
  flexDirection: "row",
  gutter: GUTTER,
}

export default Inline;