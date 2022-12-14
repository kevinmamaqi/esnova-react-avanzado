import React, { useContext } from "react"
import { TableContext } from "./store/context"
import { TableCell } from "./styles"

function TableBody() {
  const { state } = useContext(TableContext)
  const { columns, data, rowsPerPage, currentPage } = state

  const initialCut = (currentPage - 1) * rowsPerPage
  const finalCut = initialCut + rowsPerPage
  return (
    <tbody>
      {data?.slice(initialCut, finalCut).map((row) => (
        <tr key={row.id}>
          {columns
            .filter((col) => !col?.isHidden)
            .map((col) => (
              <TableCell key={col.id}>
                {col.Cell ? col.Cell(row) : row[col.id]}
              </TableCell>
            ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
