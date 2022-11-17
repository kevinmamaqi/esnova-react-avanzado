import { useEffect, useState } from "react"
import styled from "styled-components"
import { Button } from "./components/atoms"

const AppStyled = styled.div`
  ${Button} {
    background-color: red;
  }
`

function App() {
  const [count, setCount] = useState(0)
  const [doubleCount, setDoubleCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    setDoubleCount(count * 2)
  }, [count])

  return (
    <AppStyled>
      <Button
        className="bg-red"
        text={`Contador: ${count} - ${doubleCount}`}
        onClick={handleClick}
      />
    </AppStyled>
  )
}

export default App
