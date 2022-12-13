import styled from "styled-components"
import { FlexBox } from "../../../styles"

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
`

export const TableCell = styled.td.attrs(({ isSorted, children }) => ({
  children: isSorted ? (
    <FlexBox direction="row" justify="space-between">
      {children}
    </FlexBox>
  ) : (
    children
  ),
}))`
  padding: 0.5rem;
  border: 1px solid #ccc;
`
