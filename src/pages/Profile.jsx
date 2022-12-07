import React, { useReducer, useState } from "react"

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

function Profile() {
  const [state, dispatch] = useReducer(reducer, initialState)
  // Usar useContext para:
  // 1. Crear un contexto de theme
  // 2. Cambiar el color de los botones cuando cambia el contexto
  // 3. Actualizar el contexto en un switch.
  return (
    <div>
      <h1>useReducer()</h1>
      <p>Count: {state.count}</p>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: Actions.INCREMENT })}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: Actions.DECREMENT })}
        >
          Decrement
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({ type: Actions.INCREMENT_BY_AMOUNT, payload: 5 })
          }
        >
          Increment by 5
        </button>
      </div>
      <hr />
      <h1>useContext()</h1>
    </div>
  )
}

export default Profile
