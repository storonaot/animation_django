const defaultState = {
  loading: false,
  errors: null,
  data: []
}

export default function lastEpisodes(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_LASTEPISODES_ONLOAD':
      return { loading: true }
    case 'FETCH_LASTEPISODES_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        errors: null
      }
    case 'FETCH_LASTEPISODES_ERROR':
      return { loading: false, data: null, errors: action.payload }
    default:
      return state
  }
}
