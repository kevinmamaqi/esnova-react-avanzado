import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { apiUrls } from "../../constants"
import { useFetch } from "../../hooks"
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
      <SelectGroup isHidden label="Ciudades" options={cities} />
      <SelectGroup isHidden label="Tipo de propiedad" options={propertyTypes} />
    </SubHeaderStyled>
  )
}

export default SubHeader
