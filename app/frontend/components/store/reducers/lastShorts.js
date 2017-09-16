const defaultState = {
  loading: false,
  errors: null,
  data: []
}

export default function lastShorts(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_LASTSHORTS_ONLOAD':
      return { ...state, loading: true }
    case 'FETCH_LASTSHORTS_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        errors: null
      }
    case 'FETCH_LASTSHORTS_ERROR':
      return { loading: false, data: null, errors: action.payload }
    default:
      return state
  }
}
