import styled from "styled-components"
import PropTypes from "prop-types"

const ButtonStyled = styled.button`
  background-color: #000;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
`

function Button({ text, onClick, ...props }) {
  return (
    <ButtonStyled type="button" onClick={onClick} {...props}>
      {text}
    </ButtonStyled>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default styled(Button)``
