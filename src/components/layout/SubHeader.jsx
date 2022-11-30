import { useQuery, useQueryClient } from "@tanstack/react-query"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { apiUrls } from "../../constants"
import { getCities, getHouseTypes } from "../../helpers"
import {
  getHomes,
  setSelectedCity,
  setSelectedType,
} from "../../store/homes.slice"
import { Container, colors } from "../../styles"
import { SelectGroup } from "../molecules"

const SubHeaderStyled = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ${colors.clearBlue};

  ${SelectGroup} {
    width: 240px;
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
`

function SubHeader() {
  const [cities, setCities] = useState([])
  const [houseTypes, setHouseTypes] = useState([])
  useQuery({
    queryKey: ["homes"],
    queryFn: () => fetch(apiUrls.pisos).then((res) => res.json()),
    onSuccess: (data) => {
      const c = getCities(data)
      const t = getHouseTypes(data)
      setCities(c)
      setHouseTypes(t)
    },
  })

  const queryClient = useQueryClient()

  return (
    <SubHeaderStyled align="center" justify="flex-start" direction="row">
      <SelectGroup
        isHidden
        label="Ciudades"
        options={cities}
        defaultValue="Seleccionar ciudad..."
        onChange={(e) => {
          queryClient.setQueryData(["clientSelectedCity"], () => e.target.value)
        }}
      />
      <SelectGroup
        isHidden
        label="Tipo de propiedad"
        options={houseTypes}
        defaultValue="Seleccionar tipo..."
        onChange={(e) => {
          queryClient.setQueryData(["clientSelectedType"], () => e.target.value)
        }}
      />
    </SubHeaderStyled>
  )
}

export default SubHeader
