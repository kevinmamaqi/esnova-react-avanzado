import { useContext } from "react"
import { TableContext } from "./store/context"

function TableFooter() {
  const { dispatch } = useContext(TableContext)
  const handleChange = (e) => {
    const { value } = e.target
    dispatch({ type: "SET_ROWS_PER_PAGE", payload: parseInt(value, 10) })
  }
  return (
    <div>
      <select name="pets" id="pet-select" onChange={handleChange}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  )
}

export default TableFooter
