import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { apiUrls } from "../../constants"
import { filterHouses } from "../../helpers"
import { useFetch } from "../../hooks"
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
  const { data, initial, loading, error, isSuccess } = useFetch(apiUrls.pisos)
  const { selectedCity, selectedType } = useSelector((state) => state.homes)

  return (
    <HomesStyled {...props}>
      {initial && <p>Initial</p>}
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
      {isSuccess &&
        data
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
