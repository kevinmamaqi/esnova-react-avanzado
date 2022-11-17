import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-gap: ${({ gap }) => gap || "1rem"};
  grid-template-columns: ${({ columns }) => columns || "auto auto auto"};
`

export default Grid
