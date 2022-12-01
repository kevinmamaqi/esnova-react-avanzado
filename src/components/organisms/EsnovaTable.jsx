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
              {column}
            </TableCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((home) => (
          <tr key={home.id}>
            <TableCell>{home.title}</TableCell>
            <TableCell>{home.price}</TableCell>
          </tr>
        ))}
      </tbody>
    </TableStyled>
  )
}

export default EsnovaTable
