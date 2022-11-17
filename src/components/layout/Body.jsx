import React from "react"
import Header from "./Header"

function Body({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Body
