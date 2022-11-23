import { PropTypes } from "prop-types"
import React from "react"
import styled from "styled-components"
import Text from "./Text"

const LabelStyled = styled(Text)`
  ${({ isHidden }) =>
    isHidden &&
    `
    position: absolute;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    border: 0;
`}
`

function Label({ text, isHidden = false, ...props }) {
  return (
    <LabelStyled as="label" {...props} isHidden={isHidden}>
      {text}
    </LabelStyled>
  )
}

Label.propTypes = {
  text: PropTypes.string.isRequired,
  isHidden: PropTypes.bool,
}

export default styled(Label)``
