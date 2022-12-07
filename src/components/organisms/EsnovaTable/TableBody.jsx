import React, { useContext } from "react"
import { TableContext } from "./store/context"
import { TableCell } from "./styles"

function TableBody() {
  const { state } = useContext(TableContext)
  const { columns, data, rowsPerPage } = state
  return (
    <tbody>
      {data?.slice(0, rowsPerPage).map((row) => (
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
