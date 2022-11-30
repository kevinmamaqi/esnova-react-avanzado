import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
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

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>,
)
