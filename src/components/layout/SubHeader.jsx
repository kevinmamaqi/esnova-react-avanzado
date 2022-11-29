import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { apiUrls } from "../../constants"
import { useFetch } from "../../hooks"
import { setSelectedCity, setSelectedType } from "../../store/homes.slice"
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
  const [propertyTypes, setPropertyTypes] = useState([])
  const { data, initial, loading, error, isSuccess } = useFetch(apiUrls.pisos)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isSuccess) {
      const uniqCities = data.reduce((acc, home) => {
        if (!acc.includes(home.city)) {
          acc.push(home.city)
        }
        return acc
      }, [])
      setCities(uniqCities)

      const uniqPropertyType = data.reduce((acc, home) => {
        if (!acc.includes(home.type)) {
          acc.push(home.type)
        }
        return acc
      }, [])
      setPropertyTypes(uniqPropertyType)
    }
  }, [data, isSuccess])

  return (
    <SubHeaderStyled align="center" justify="flex-start" direction="row">
      <SelectGroup
        isHidden
        label="Ciudades"
        options={cities}
        defaultValue="Seleccionar ciudad..."
        onChange={(e) => {
          dispatch(setSelectedCity(e.target.value))
        }}
      />
      <SelectGroup
        isHidden
        label="Tipo de propiedad"
        options={propertyTypes}
        defaultValue="Seleccionar tipo..."
        onChange={(e) => {
          dispatch(setSelectedType(e.target.value))
        }}
      />
    </SubHeaderStyled>
  )
}

export default SubHeader
