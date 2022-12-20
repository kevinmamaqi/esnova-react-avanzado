import React from "react"
import { ErrorBoundary } from "../components/atoms/ErrorBoundary"
import { Body } from "../components/layout"
import SubHeader from "../components/layout/SubHeader"
import { Homes } from "../components/organisms"
import { Container } from "../styles"

const ErrorComponent = () => {
  throw new Error("Error")
  return "hay un error"
}

const WithEBoundary = () => (
  <ErrorBoundary>
    <ErrorComponent />
  </ErrorBoundary>
)

function Home() {
  return (
    <Body>
      <WithEBoundary />
      <SubHeader />
      <Container>
        <Homes />
      </Container>
    </Body>
  )
}

export default Home
