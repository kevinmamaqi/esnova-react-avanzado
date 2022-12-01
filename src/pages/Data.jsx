import { useQuery } from "@tanstack/react-query"
import React from "react"
import { Body, SubHeaderStyled } from "../components/layout"
import EsnovaTable from "../components/organisms/EsnovaTable"
import { apiUrls } from "../constants"
import { Container } from "../styles"

const handleColor = (val) => {
  if (val < 200000) return "green"
  if (val > 500000) return "red"
  return "black"
}

const handleColor2 = (val) => {
  if (val < 500000) return "green"
  return "black"
}

function Data() {
  const { data } = useQuery({
    queryKey: ["homes"],
    queryFn: () => fetch(apiUrls.pisos).then((res) => res.json()),
  })

  const formattedData = data?.map((home) => ({
    id: home.id,
    title: home.title,
    // eslint-disable-next-line react/no-unstable-nested-components
    price: <span style={{ color: handleColor(home.price) }}>{home.price}</span>,
    city: home.city,
  }))

  const formattedData2 = data?.map((home) => ({
    id: home.id,
    title: home.title,
    // eslint-disable-next-line react/no-unstable-nested-components
    price: (
      <span style={{ color: handleColor2(home.price) }}>{home.price}</span>
    ),
    type: home.type,
  }))

  const columns = ["Nombre", "Precio", "Ciudad"]
  const columns2 = ["Nombre", "Precio", "Tipo"]
  return (
    <Body>
      <SubHeaderStyled>
        <h1>Data</h1>
      </SubHeaderStyled>
      <Container>
        <EsnovaTable columns={columns} data={formattedData} />
        <div style={{ marginTop: "2rem" }} />
        <EsnovaTable columns={columns2} data={formattedData2} />
      </Container>
    </Body>
  )
}

export default Data
