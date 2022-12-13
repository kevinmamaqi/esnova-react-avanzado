import produce from "immer"

export const initialState = {
  columns: [],
  data: [],
  showHeader: true,
  rowsPerPage: 10,
}

const extraProps = {
  isSorted: false,
  showSortBy: false,
  sortOrder: "default",
}

const formatColumns = (columns) =>
  columns.map((col) => ({ ...extraProps, ...col }))

// Nombre de la columna, ascenente o descendente
// {id: "name", sortOrder: "asc", isSorted: true, showSortBy: true}

export const Actions = {
  SET_COLUMNS: "SET_COLUMNS",
  SET_DATA: "SET_DATA",
  SET_SHOW_HEADER: "SET_SHOW_HEADER",
  SET_ROWS_PER_PAGE: "SET_ROWS_PER_PAGE",
  SORT_ROWS: "SORT_ROWS",
}

export const tableReducer = (state, action) => {
  switch (action.type) {
    case Actions.SET_COLUMNS:
      return produce(state, (draft) => {
        draft.columns = formatColumns(action.payload)
      })
    case Actions.SET_DATA:
      return produce(state, (draft) => {
        draft.data = action.payload
      })
    case Actions.SET_SHOW_HEADER:
      return produce(state, (draft) => {
        draft.showHeader = action.payload
      })

    case Actions.SET_ROWS_PER_PAGE:
      return produce(state, (draft) => {
        draft.rowsPerPage = action.payload
      })

    case Actions.SORT_ROWS:
      return produce(state, (draft) => {
        const { colId } = action.payload
        const idx = draft.columns.findIndex((col) => col.id === colId)
        if (idx === -1) return

        const { isSorted, sortOrder } = draft.columns[idx]

        // Sort logic
        if (!isSorted) {
          draft.data.sort((a, b) => `${a[colId]}`.localeCompare(`${b[colId]}`))
          draft.columns[idx].sortOrder = "asc"
          draft.columns[idx].isSorted = true
        } else {
          draft.data.sort((a, b) =>
            sortOrder === "asc"
              ? `${b[colId]}`.localeCompare(`${a[colId]}`)
              : `${a[colId]}`.localeCompare(`${b[colId]}`),
          )

          draft.columns[idx].sortOrder = sortOrder === "asc" ? "desc" : "asc"
        }

        draft.columns = draft.columns.map((col) => ({
          ...col,
          isSorted: col.id === colId,
        }))
      })
    default:
      return state
  }
}
