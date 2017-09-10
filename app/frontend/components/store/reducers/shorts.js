const defaultState = {
  loading: false,
  errors: null,
  data: []
}

export default function shorts(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_SHORTS_ONLOAD':
      return { ...state, loading: true }
    case 'FETCH_SHORTS_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        errors: null
      }
    case 'FETCH_SHORTS_ERROR':
      return { loading: false, data: null, errors: action.payload }
    default:
      return state
  }
}
