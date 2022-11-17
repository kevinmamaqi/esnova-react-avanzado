import React from "react"
import styled from "styled-components"
import { Container, colors } from "../../styles"

const SubHeaderStyled = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ${colors.clearBlue};
`

function SubHeader() {
  return <SubHeaderStyled>SubHeader</SubHeaderStyled>
}

export default SubHeader
