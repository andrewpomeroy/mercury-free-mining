import styled from '@emotion/styled';
import { layout } from "styled-system";
import { flexbox } from "../styleFunctions";

const CenterColumn = styled.div`
  flex: 1;
  max-width: ${props => props.theme.layout.centerColumn.maxWidth}px;
  ${layout}
  ${flexbox}
`;

export default CenterColumn;