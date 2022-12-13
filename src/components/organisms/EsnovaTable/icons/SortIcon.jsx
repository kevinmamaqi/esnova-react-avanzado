import { useContext } from "react"
import styled from "styled-components"
import { Triangle } from "../../../atoms"
import { TableContext } from "../store/context"
import { Actions } from "../store/reducer"

const SortIconStyled = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  background-color: lightblue;
  border-radius: 3px;
  padding-top: 1px;
  padding-bottom: 1px;
  position: relative;
  align-items: center;
  width: 20px;
  height: 20px;

  opacity: ${({ isSorted }) => (isSorted ? 1 : 0.5)};

  &:hover {
    cursor: pointer;
  }
`

function SortIcon({ colId }) {
  const { state, dispatch } = useContext(TableContext)

  const sortedCol = state.columns.find((col) => col.id === colId)

  const handleSort = () => {
    dispatch({ type: Actions.SORT_ROWS, payload: { colId } })
  }
  return (
    <SortIconStyled onClick={handleSort} isSorted={sortedCol?.isSorted}>
      <Triangle w={12} h={6} direction="top" />
      <Triangle w={12} h={6} direction="bottom" />
    </SortIconStyled>
  )
}

export default SortIcon
