import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./homes.slice"

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    homes: homeReducer,
  },
})
