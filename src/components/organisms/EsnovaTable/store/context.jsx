import { createContext, useReducer } from "react"
import { initialState, tableReducer } from "./reducer"

const TableContext = createContext(initialState)

function TableProvider({ children }) {
  const [state, dispatch] = useReducer(tableReducer, initialState)
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TableContext.Provider value={{ state, dispatch }}>
      {children}
    </TableContext.Provider>
  )
}

export { TableContext }

export default TableProvider
