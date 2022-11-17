import React from "react"
import { Card } from "../components/atoms"
import { Body } from "../components/layout"
import SubHeader from "../components/layout/SubHeader"
import { Container } from "../styles"
import Grid from "../styles/Grid"

const Homes = new Array(10).fill(0).map((_, i) => ({
  id: i,
  title: `Home ${i}`,
  price: `Price ${i}`,
}))

function Home() {
  return (
    <Body>
      <SubHeader />
      <Container>
        <Grid>
          {Homes.map((home) => (
            <Card key={home.id}>
              <h2>{home.title}</h2>
              <p>{home.price}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Body>
  )
}

export default Home
