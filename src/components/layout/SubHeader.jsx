import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { apiUrls } from "../../constants"
import { useFetch } from "../../hooks"
import { Container, colors } from "../../styles"

const SubHeaderStyled = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ${colors.clearBlue};
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

  return <SubHeaderStyled>SubHeader</SubHeaderStyled>
}

export default SubHeader
