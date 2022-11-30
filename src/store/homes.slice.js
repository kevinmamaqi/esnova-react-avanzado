import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apiUrls } from "../constants"
import { getCities, getHouseTypes } from "../helpers"

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
  homes: {
    byIds: {},
    allIds: [],
    byCities: { madrid: [3, 4, 5], barcelona: [1, 2] },
    byTypes: { piso: [1, 2, 3], chalet: [4, 5] },
    byDateAdded: { 2020: [1, 2, 3], 2019: [4, 5] },
    byNumberOfRooms: { 1: [1, 2, 3], 2: [4, 5] },
  },
  cities: [],
  types: [],
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
    setDeleteById: (state, action) => {
      const { id } = action.payload
      delete state.homes.byIds[id]
      state.homes.allIds = state.homes.allIds.filter((item) => item !== id)
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
        action.payload.forEach((home) => {
          state.homes.byIds[home.id] = home
        })
        state.homes.allIds = Object.keys(state.homes.byIds)

        state.cities = getCities(action.payload)
        state.types = getHouseTypes(action.payload)
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
