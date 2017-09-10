export const getLastDVDs = () => (dispatch) => {
  dispatch({
    type: 'FETCH_LASTSDVDS_ONLOAD'
  })

  // axios.get('/api/shorts').then((response) => {
  axios.get('/api/dvds/last').then((response) => {
    // console.log('getSerials response', response)
    dispatch({
      type: 'FETCH_LASTDVDS_SUCCESS',
      payload: response.data
    })
  }, (error) => {
    dispatch({
      type: 'FETCH_LASTDVDS_ERROR',
      payload: error.response
    })
  })
}

export const getShorts = () => () => {}
