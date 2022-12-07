import React from "react"
import styled from "styled-components"

const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
`

const TableCell = styled.td`
  padding: 0.5rem;
  border: 1px solid #ccc;
`

function EsnovaTable({ columns, data }) {
  return (
    <TableStyled>
      <thead>
        <tr>
          {columns.map((column) => (
            <TableCell as="th" key={column}>
              {column.label}
            </TableCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <TableCell key={col.id}>
                {col.Cell ? col.Cell(row) : row[col.id]}
              </TableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </TableStyled>
  )
}

export default EsnovaTable
