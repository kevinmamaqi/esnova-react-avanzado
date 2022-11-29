import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedCity: null,
  selectedType: null,
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
})

// Action creators are generated for each case reducer function
export const { setSelectedCity, setSelectedType } = homesSlice.actions
export default homesSlice.reducer
