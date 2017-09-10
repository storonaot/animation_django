export const getLastShorts = () => (dispatch) => {
  dispatch({
    type: 'FETCH_LASTSHORTS_ONLOAD'
  })

  // axios.get('/api/shorts').then((response) => {
  axios.get('/api/shorts/last').then((response) => {
    // console.log('getSerials response', response)
    dispatch({
      type: 'FETCH_LASTSHORTS_SUCCESS',
      payload: response.data
    })
  }, (error) => {
    dispatch({
      type: 'FETCH_LASTSHORTS_ERROR',
      payload: error.response
    })
  })
}

// export const getShorts = () => () => {}

export const getShorts = () => (dispatch) => {
  dispatch({
    type: 'FETCH_SHORTS_ONLOAD'
  })

  axios.get('/api/shorts').then((response) => {
    console.log('getShorts response', response)
    dispatch({
      type: 'FETCH_SHORTS_SUCCESS',
      payload: response.data
    })
  }, (error) => {
    dispatch({
      type: 'FETCH_SHORTS_ERROR',
      payload: error.response
    })
  })
}
