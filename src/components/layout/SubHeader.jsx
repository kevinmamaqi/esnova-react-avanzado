import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
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
  const dispatch = useDispatch()
  const { cities, types } = useSelector((state) => state.homes)

  useEffect(() => {
    console.log("subheader")
    dispatch(getHomes())
  }, [dispatch])

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
        options={types}
        defaultValue="Seleccionar tipo..."
        onChange={(e) => {
          dispatch(setSelectedType(e.target.value))
        }}
      />
    </SubHeaderStyled>
  )
}

export default SubHeader
