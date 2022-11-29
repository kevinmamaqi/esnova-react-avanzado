import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { Data, Home, Profile } from "./pages"
import "modern-normalize/modern-normalize.css"
import { urls } from "./constants"
import { store } from "./store/store"

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
