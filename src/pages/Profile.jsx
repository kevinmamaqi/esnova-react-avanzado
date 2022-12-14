import React, { useState, useMemo, useCallback, useEffect } from "react"
import styled from "styled-components"

const expensiveFunction = (color) => {
  let i = 0
  while (i < 2000000000) {
    i += 1
  }
  return color
}

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

function CircleComponent({ color }) {
  const colorMemo = useMemo(() => expensiveFunction(color), [color])
  return <Circle color={colorMemo} />
}

function Profile() {
  const [color, setColor] = useState("red")
  // counter
  const [counter, setCounter] = useState(0)
  const changeColor = () => {
    setColor("blue")
  }

  const diHola = useCallback(() => {
    console.log("hola")
  }, [color])

  useEffect(() => {
    window.addEventListener("click", diHola)
  }, [counter])

  return (
    <div>
      <CircleComponent color={color} />
      <button type="button" onClick={changeColor}>
        Change color
      </button>
      <br />
      {counter}
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </div>
  )
}

export default Profile
