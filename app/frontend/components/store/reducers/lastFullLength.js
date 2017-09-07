const defaultState = {
  loading: true,
  errors: null,
  data: []
}

export default function lastFullLength(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_LASTFULLLENGTH_ONLOAD':
      return { ...state, loading: true }
    case 'FETCH_LASTFULLLENGTH_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        errors: null
      }
    case 'FETCH_LASTFULLLENGTH_ERROR':
      return { loading: false, data: null, errors: action.payload }
    default:
      return state
  }
}
