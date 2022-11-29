import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apiUrls } from "../constants"

export const getHomes = createAsyncThunk("homes/getHomes", async () => {
  try {
    const res = await fetch(apiUrls.pisos)
    const response = await res.json()
    return response
  } catch (error) {
    throw Error(error)
  }
})

const initialState = {
  homes: [],
  selectedCity: null,
  selectedType: null,
  status: {
    initial: true,
    isLoading: false,
    isError: false,
    isSuccess: false,
  },
}

export const homesSlice = createSlice({
  name: "homes",
  initialState,
  reducers: {
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHomes.pending, (state) => {
        state.status = {
          initial: false,
          isLoading: true,
          isError: false,
          isSuccess: false,
        }
      })
      .addCase(getHomes.fulfilled, (state, action) => {
        state.homes = action.payload
        state.status = {
          initial: false,
          isLoading: false,
          isError: false,
          isSuccess: true,
        }
      })
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedCity, setSelectedType } = homesSlice.actions
export default homesSlice.reducer
