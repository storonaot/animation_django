const defaultState = {
  loading: true,
  errors: null,
  data: []
}

export default function lastDVDs(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_LASTDVDS_ONLOAD':
      return { ...state, loading: true }
    case 'FETCH_LASTDVDS_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        errors: null
      }
    case 'FETCH_LASTDVDS_ERROR':
      return { loading: false, data: null, errors: action.payload }
    default:
      return state
  }
}
