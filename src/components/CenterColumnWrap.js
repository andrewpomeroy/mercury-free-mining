import styled from '@emotion/styled';
import { layout } from "styled-system";
import { flexbox } from "../styleFunctions";

const CenterColumnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${layout}
  ${flexbox}
  padding-left: ${props => props.theme.layout.centerColumn.outerGutter}px;
  padding-right: ${props => props.theme.layout.centerColumn.outerGutter}px;
`;

export default CenterColumnWrap;