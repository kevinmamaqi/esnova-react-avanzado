import { PropTypes } from "prop-types"
import styled from "styled-components"
import { Label, Select } from "../atoms"

const SelectGroupStyled = styled.div``

function SelectGroup({
  isHidden = false,
  label,
  options,
  className = "",
  ...props
}) {
  return (
    <SelectGroupStyled className={className}>
      <Label isHidden={isHidden} text={label} />
      <Select options={options} {...props} />
    </SelectGroupStyled>
  )
}

SelectGroup.propTypes = {
  isHidden: PropTypes.bool,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default styled(SelectGroup)``
