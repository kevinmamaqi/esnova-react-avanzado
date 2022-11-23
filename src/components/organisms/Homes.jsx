import React from "react"
import styled from "styled-components"
import { apiUrls } from "../../constants"
import { useFetch } from "../../hooks"
import Grid from "../../styles/Grid"
import { Card } from "../atoms"

function Homes({ ...props }) {
  const { data, initial, loading, error, isSuccess } = useFetch(apiUrls.pisos)

  return (
    <Grid {...props}>
      {initial && <p>Initial</p>}
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
      {isSuccess &&
        data.map((home) => (
          <Card key={home.id}>
            <h2>{home.title}</h2>
            <p>{home.price}</p>
          </Card>
        ))}
    </Grid>
  )
}

export default styled(Homes)``
