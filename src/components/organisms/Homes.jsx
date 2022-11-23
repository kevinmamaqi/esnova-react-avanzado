import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { apiUrls } from "../../constants"
import Grid from "../../styles/Grid"
import { Card } from "../atoms"

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

function Homes({ ...props }) {
  const [initial, setInitial] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [homes, setHomes] = useState([])

  useEffect(() => {
    setInitial(false)
    setLoading(true)
    fetch(`${apiUrls.pisos}`)
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setHomes(data)
        setIsSuccess(true)
      })
      .catch((e) => {
        setLoading(false)
        setError(e)
      })
  }, [])

  return (
    <Grid {...props}>
      {initial && <p>Initial</p>}
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
      {isSuccess &&
        homes.map((home) => (
          <Card key={home.id}>
            <h2>{home.title}</h2>
            <p>{home.price}</p>
          </Card>
        ))}
    </Grid>
  )
}

export default styled(Homes)``
