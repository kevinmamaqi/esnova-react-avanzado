import styled from "styled-components"
import { colors, dimensions, FlexBox } from "../../styles"

const Card = styled(FlexBox)`
  border-radius: ${dimensions.borderRadius.base};
  box-shadow: ${colors.shadow.base};
`
export default Card
