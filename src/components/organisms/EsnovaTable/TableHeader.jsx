import { useContext } from "react"
import { TableContext } from "./store/context"
import { TableCell } from "./styles"

function TableHeader() {
  const { state } = useContext(TableContext)
  const { columns } = state
  return (
    <thead>
      <tr>
        {columns
          .filter((col) => !col?.isHidden)
          .map((column) => (
            <TableCell as="th" key={column}>
              {column.label}
            </TableCell>
          ))}
      </tr>
    </thead>
  )
}

export default TableHeader
