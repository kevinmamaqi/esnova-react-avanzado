import styled from "styled-components"

const Text = styled.p`
  font-size: ${({ size }) => size || "1rem"};
  font-weight: ${({ weight }) => weight || "400"};
  color: ${({ color }) => color || "black"};
`

export default Text
