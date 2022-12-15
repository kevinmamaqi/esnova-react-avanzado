import { useQuery } from "@tanstack/react-query"
import React, { useMemo, useState } from "react"
import { Body, SubHeaderStyled } from "../components/layout"
import EsnovaTable from "../components/organisms/EsnovaTable"
import { apiUrls } from "../constants"
import { groupByDistricts } from "../helpers/groupByDistricts"
import { Container, FlexBox } from "../styles"

const setPriceColor = (price) => {
  if (price < 250000) return "green"
  if (price > 600000) return "red"
  return "black"
}

function Precio({ price }) {
  return <span style={{ color: setPriceColor(price) }}>{price} €</span>
}

function Data() {
  const [view, setView] = useState("viviendas")
  const { data } = useQuery({
    queryKey: ["homes"],
    queryFn: () => fetch(apiUrls.pisos).then((res) => res.json()),
  })

  const columns = useMemo(
    () => [
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
    ],
    [],
  )

  const columnsDistrict = useMemo(
    () => [
      { id: "district", label: "Barrio", showSortBy: true },
      {
        id: "numHomes",
        label: "Número de viviendas",
      },
    ],
    [],
  )

  const dataDistrict = useMemo(() => {
    if (!data) return []
    return groupByDistricts(data)
  }, [data])

  return (
    <Body>
      <SubHeaderStyled>
        <h1>Data</h1>
      </SubHeaderStyled>
      <Container>
        <FlexBox style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <button
            type="button"
            onClick={() =>
              view === "barrios" ? setView("viviendas") : setView("barrios")
            }
          >
            {view}
          </button>
        </FlexBox>
        {view === "viviendas" ? (
          <EsnovaTable columns={columns} data={data} />
        ) : (
          <EsnovaTable columns={columnsDistrict} data={dataDistrict} />
        )}
      </Container>
    </Body>
  )
}

export default Data
