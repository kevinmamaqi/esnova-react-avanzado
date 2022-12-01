import { useQuery } from "@tanstack/react-query"
import React from "react"
import { Body, SubHeaderStyled } from "../components/layout"
import EsnovaTable from "../components/organisms/EsnovaTable"
import { apiUrls } from "../constants"
import { Container } from "../styles"

function Data() {
  const { data } = useQuery({
    queryKey: ["homes"],
    queryFn: () => fetch(apiUrls.pisos).then((res) => res.json()),
  })

  const columns = ["Nombre", "Precio"]
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
