import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Data, Home, Profile } from "./pages"
import "modern-normalize/modern-normalize.css"
import { urls } from "./constants"

const router = createBrowserRouter([
  {
    path: urls.home,
    element: <Home />,
  },
  {
    path: urls.data,
    element: <Data />,
  },
  {
    path: urls.profile,
    element: <Profile />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
