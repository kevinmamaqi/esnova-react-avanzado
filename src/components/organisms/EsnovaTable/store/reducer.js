import produce from "immer"

export const initialState = {
  columns: [],
  data: [],
  showHeader: true,
  rowsPerPage: 10,
}

export const Actions = {
  SET_COLUMNS: "SET_COLUMNS",
  SET_DATA: "SET_DATA",
  SET_SHOW_HEADER: "SET_SHOW_HEADER",
  SET_ROWS_PER_PAGE: "SET_ROWS_PER_PAGE",
}

export const tableReducer = (state, action) => {
  switch (action.type) {
    case Actions.SET_COLUMNS:
      return (
        state,
        (draft) => {
          draft.column = action.payload
        }
      )
    case Actions.SET_DATA:
      return {
        ...state,
        data: action.payload,
      }
    case Actions.SET_SHOW_HEADER:
      return {
        ...state,
        showHeader: action.payload,
      }

    case Actions.SET_ROWS_PER_PAGE:
      return {
        ...state,
        rowsPerPage: action.payload,
      }
    default:
      return state
  }
}
