import { useContext } from "react"
import styled from "styled-components"
import { TableContext } from "./store/context"
import TablePagination from "./TablePagination"

const TableFooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-top: 0;
  width: 100%;
`

function TableFooter() {
  const { dispatch } = useContext(TableContext)
  const handleChange = (e) => {
    const { value } = e.target
    dispatch({ type: "SET_ROWS_PER_PAGE", payload: parseInt(value, 10) })
  }
  return (
    <TableFooterStyled>
      <TablePagination />
      <select name="pets" id="pet-select" onChange={handleChange}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </TableFooterStyled>
  )
}

export default TableFooter
