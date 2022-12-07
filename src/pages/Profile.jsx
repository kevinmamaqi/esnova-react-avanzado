import React, { useContext, useReducer } from "react"
import { useState } from "react"

const initialState = {
  count: 0,
}

const Actions = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
}

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.INCREMENT:
      return { count: state.count + 1 }
    case Actions.DECREMENT:
      return { count: state.count - 1 }
    case Actions.INCREMENT_BY_AMOUNT:
      return { count: state.count + action.payload }
    default:
      return state
  }
}

const contextValue = {
  theme: "light",
}
const StylesContext = React.createContext(contextValue)

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { theme } = useContext(StylesContext)

  return (
    <div>
      <p>Count: {state.count}</p>

      <button
        type="button"
        onClick={() => dispatch({ type: Actions.INCREMENT })}
        style={{
          color: theme === "light" ? "black" : "white",
          backgroundColor: theme === "light" ? "white" : "black",
        }}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: Actions.DECREMENT })}
        style={{
          color: theme === "light" ? "black" : "white",
          backgroundColor: theme === "light" ? "white" : "black",
        }}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({ type: Actions.INCREMENT_BY_AMOUNT, payload: 5 })
        }
        style={{
          color: theme === "light" ? "black" : "white",
          backgroundColor: theme === "light" ? "white" : "black",
        }}
      >
        Increment by 5
      </button>
    </div>
  )
}

function Profile() {
  const [theme, setTheme] = useState(contextValue)
  return (
    <StylesContext.Provider value={theme}>
      <button
        type="button"
        onClick={() =>
          setTheme((prev) => {
            if (prev.theme === "light") return { theme: "dark" }
            return { theme: "light" }
          })
        }
      >
        Toggle theme
      </button>
      <div>
        <h1>useReducer()</h1>
        <Counter />
        <hr />
        <h1>useContext()</h1>
      </div>
    </StylesContext.Provider>
  )
}

export default Profile
