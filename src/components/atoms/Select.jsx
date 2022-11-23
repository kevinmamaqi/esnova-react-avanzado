import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const SelectStyled = styled.select`
  width: 100%;
`

function Select({ options, ...props }) {
  return (
    <SelectStyled {...props}>
      {options.map((opt) => (
        <option value={opt} key={opt}>
          {opt}
        </option>
      ))}
    </SelectStyled>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Select
