import styled from "styled-components"
import { Label, Select } from "../atoms"

const SelectGroupStyled = styled.div``

function SelectGroup() {
  return (
    <SelectGroupStyled>
      <Label />
      <Select />
    </SelectGroupStyled>
  )
}

export default SelectGroup
