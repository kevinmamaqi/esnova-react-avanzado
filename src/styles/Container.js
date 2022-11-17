import styled from "styled-components"
import FlexBox from "./FlexBox"

const Container = styled(FlexBox)`
  width: 100%;
  padding-left: ${({ px }) => px || "2rem"};
  padding-right: ${({ px }) => px || "2rem"};
`

export default Container
