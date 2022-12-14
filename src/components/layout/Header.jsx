import React from "react"
import styled from "styled-components"
import { MainMenu } from "../../constants"
import { Container } from "../../styles"
import { Text } from "../atoms"
import Menu from "../molecules/Menu"

const HeaderStyled = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
`
function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between">
      <Text as="h1">MIPISO.com</Text>
      <Menu menu={MainMenu} />
    </HeaderStyled>
  )
}

export default Header
