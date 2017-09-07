export const getLastFullLength = () => (dispatch) => {
  dispatch({
    type: 'FETCH_LASTFULLLENGTH_ONLOAD'
  })

  axios.get('/api/fulllength/last').then((response) => {
    dispatch({
      type: 'FETCH_LASTFULLLENGTH_SUCCESS',
      payload: response.data
    })
  }, (error) => {
    dispatch({
      type: 'FETCH_LASTFULLLENGTH_ERROR',
      payload: error.response
    })
  })
}

export const getShorts = () => () => {}
