import React, { useContext, useEffect } from "react"
import TableProvider, { TableContext } from "./store/context"
import { TableStyled } from "./styles"
import TableBody from "./TableBody"
import TableFooter from "./TableFooter"
import TableHeader from "./TableHeader"

function Table({ columns, data, showHeader = true }) {
  const { state, dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: "SET_COLUMNS", payload: columns })
    dispatch({ type: "SET_DATA", payload: data })
    dispatch({ type: "SET_SHOW_HEADER", payload: showHeader })
  }, [columns, data, showHeader, dispatch])

  return (
    <TableStyled>
      {state.showHeader && <TableHeader />}
      <TableBody />
      <TableFooter />
    </TableStyled>
  )
}

function EsnovaTable(props) {
  return (
    <TableProvider>
      <Table {...props} />
    </TableProvider>
  )
}

export default EsnovaTable
