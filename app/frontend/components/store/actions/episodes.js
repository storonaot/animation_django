export const getLastEpisodes = () => (dispatch) => {
  dispatch({
    type: 'FETCH_LASTEPISODES_ONLOAD'
  })

  axios.get('/api/episodes/last').then((response) => {
    dispatch({
      type: 'FETCH_LASTEPISODES_SUCCESS',
      payload: response.data
    })
  }, (error) => {
    dispatch({
      type: 'FETCH_LASTEPISODES_ERROR',
      payload: error.response
    })
  })
}

export const getShorts = () => () => {}
