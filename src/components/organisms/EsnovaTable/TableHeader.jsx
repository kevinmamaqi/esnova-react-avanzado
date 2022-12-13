import { useContext } from "react"
import { SortIcon } from "./icons"
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
            <TableCell as="th" key={column.id} isSorted={column.showSortBy}>
              {column.label}
              {column.showSortBy && <SortIcon colId={column.id} />}
            </TableCell>
          ))}
      </tr>
    </thead>
  )
}

export default TableHeader
