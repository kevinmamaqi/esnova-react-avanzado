import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { dimensions } from "../../styles"

const SelectStyled = styled.select`
  width: 100%;
  padding: 0.35rem 0.5rem;
  border-radius: ${dimensions.borderRadius.base};
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
