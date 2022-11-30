import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { filterHouses } from "../../helpers"
import { getHomes } from "../../store/homes.slice"
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
  const { initial, isLoading, isError, isSuccess } = useSelector(
    (state) => state.homes.status,
  )

  const { byIds, allIds } = useSelector((state) => state.homes.homes)

  console.log("byIds", byIds)
  console.log("allIds", allIds)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("homes")
    dispatch(getHomes())
  }, [dispatch])

  const { selectedCity, selectedType } = useSelector((state) => state.homes)

  return (
    <HomesStyled {...props}>
      {initial && <p>Initial</p>}
      {isLoading && <p>Loading</p>}
      {isError && <p>Error</p>}
      {isSuccess &&
        allIds
          .map((id) => byIds[id])
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
