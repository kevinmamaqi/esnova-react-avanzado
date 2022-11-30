import { useQuery } from "@tanstack/react-query"
import React from "react"
import styled from "styled-components"
import { filterHouses } from "../../helpers"
import Grid from "../../styles/Grid"
import { Card, Text } from "../atoms"

const HomesStyled = styled(Grid)`
  ${Text} {
    font-size: 0.75rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`

function Homes({ ...props }) {
  const { data, isInitialLoading, isError, isLoading } = useQuery({
    queryKey: ["homes"],
  })
  const { data: selectedCity } = useQuery({
    queryKey: ["clientSelectedCity"],
  })
  const { data: selectedType } = useQuery({ queryKey: ["clientSelectedType"] })

  return (
    <HomesStyled {...props}>
      {isInitialLoading && <p>Initial</p>}
      {isLoading && <p>Loading</p>}
      {isError && <p>Error</p>}
      {(data || [])
        .filter((house) => filterHouses(house, selectedCity, selectedType))
        .map((home) => (
          <Card key={home.id}>
            <h2>{home.title}</h2>
            <Text>{home.price}</Text>
            <Text>Ciudad: {home.city}</Text>
            <Text>Tipo: {home.type}</Text>
          </Card>
        ))}
    </HomesStyled>
  )
}

export default styled(Homes)``
