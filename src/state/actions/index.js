import axios from 'axios'

export const GET_CITIES_START = 'GET_CITIES_START'
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS'
export const GET_CITIES_FAILURE = 'GET_CITIES_FAILURE'

export const getCities = () => dispatch => {
  dispatch({ type: GET_CITIES_START })
  axios
    .get('https://labs-28-citrics-b.herokuapp.com/cities/allid')
    .then(res => {
      console.log('get citites ->', res.data)
      dispatch({ type: GET_CITIES_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: GET_CITIES_FAILURE, payload: err.message })
    })
}
