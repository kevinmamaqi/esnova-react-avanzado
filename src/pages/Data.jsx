import { useQuery } from "@tanstack/react-query"
import React from "react"
import { Body, SubHeaderStyled } from "../components/layout"
import EsnovaTable from "../components/organisms/EsnovaTable"
import { apiUrls } from "../constants"
import { Container } from "../styles"

const setPriceColor = (price) => {
  if (price < 250000) return "green"
  if (price > 600000) return "red"
  return "black"
}

function Precio({ price }) {
  return <span style={{ color: setPriceColor(price) }}>{price} €</span>
}

function Data() {
  const { data } = useQuery({
    queryKey: ["homes"],
    queryFn: () => fetch(apiUrls.pisos).then((res) => res.json()),
  })

  const columns = [
    { id: "title", label: "Nombre", showSortBy: true },
    {
      id: "price",
      label: "Precio",
      Cell: Precio,
    },
    {
      id: "city",
      label: "Ciudad",
      isHidden: true,
    },
    {
      id: "type",
      label: "Tipo",
      showSortBy: true,
    },
  ]

  return (
    <Body>
      <SubHeaderStyled>
        <h1>Data</h1>
      </SubHeaderStyled>
      <Container>
        <EsnovaTable columns={columns} data={data} />
      </Container>
    </Body>
  )
}

export default Data
