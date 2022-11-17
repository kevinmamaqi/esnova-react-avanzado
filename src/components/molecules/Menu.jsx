import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Text } from "../atoms"

const MenuStyled = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  ${Text} {
    margin-left: 0.75rem;

    &:first-child {
      margin-left: 0;
    }
  }
`

function Menu({ menu, ...props }) {
  return (
    <MenuStyled {...props}>
      {menu.map((m) => (
        <Text as="li" key={m.url}>
          <Link to={m.url}>{m.name}</Link>
        </Text>
      ))}
    </MenuStyled>
  )
}

export default styled(Menu)``
