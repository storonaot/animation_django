export const getLastShorts = () => (dispatch) => {
  dispatch({
    type: 'FETCH_LASTSHORTS_ONLOAD'
  })

  axios.get('/api/shorts').then((response) => {
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

export const getShorts = () => () => {}
