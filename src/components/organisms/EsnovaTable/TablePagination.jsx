import React, { useContext } from "react"
import styled from "styled-components"
import { FlexBox } from "../../../styles"
import { Triangle } from "../../atoms"
import { TableContext } from "./store/context"
import { Actions } from "./store/reducer"

const TablePaginationStyled = styled(FlexBox)`
  flex-direction: row;

  ${Triangle} {
    &:first-child {
      margin-right: 1rem;
      ${({ hasPrevious }) => !hasPrevious && { cursor: "not-allowed" }}
      ${({ hasPrevious }) => !hasPrevious && { opacity: 0.25 }}
    }

    &:last-child {
      margin-left: 1rem;
      ${({ hasNext }) => !hasNext && { cursor: "not-allowed" }}
      ${({ hasNext }) => !hasNext && { opacity: 0.25 }}
    }
  }
`

function TablePagination() {
  const { state, dispatch } = useContext(TableContext)
  const { currentPage, data, rowsPerPage } = state

  const totalPages = Math.ceil(data?.length / rowsPerPage)

  const hasPrevious = currentPage > 1
  const hasNext = currentPage < totalPages

  const handlePrevious = () => {
    if (hasPrevious) {
      dispatch({
        type: Actions.SET_PAGINATION,
        payload: currentPage - 1,
      })
    }
  }

  const handleNext = () => {
    if(hasNext) {
        dispatch({
            type: Actions.SET_PAGINATION,
            payload: currentPage + 1,
          })
    }
   
  }
  return (
    <TablePaginationStyled hasPrevious={hasPrevious} hasNext={hasNext}>
      <Triangle direction="left" onClick={handlePrevious} />
      Pagina {currentPage} de {totalPages}{" "}
      <Triangle direction="right" onClick={handleNext} />
    </TablePaginationStyled>
  )
}

export default TablePagination
