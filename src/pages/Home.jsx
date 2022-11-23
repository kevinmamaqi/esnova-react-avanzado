import React from "react"
import { Body } from "../components/layout"
import SubHeader from "../components/layout/SubHeader"
import { Homes } from "../components/organisms"
import { Container } from "../styles"

function Home() {
  return (
    <Body>
      <SubHeader />
      <Container>
        <Homes />
      </Container>
    </Body>
  )
}

export default Home
