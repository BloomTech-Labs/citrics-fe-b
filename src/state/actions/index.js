import axios from 'axios'

export const GET_CITIES_START = 'GET_CITIES_START'
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS'
export const GET_CITIES_FAILURE = 'GET_CITIES_FAILURE'

export const REMOVE_CITY_COMPARE = 'REMOVE_CITY_COMPARE'
export const MOVE_CITY_COMPARE = 'MOVE_CITY_COMPARE'
export const MOVE_CITY_ERROR = 'MOVE_CITY_ERROR'

export const REMOVE_CITY_TO_COMPARE = 'REMOVE_CITY_TO_COMPARE'

export const GET_USER_START = 'GET_USER_START'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'

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

export const cityToCompare = cityId => dispatch => {
  // dispatch({ type: REMOVE_CITY_COMPARE})
  axios
    .get(`https://labs-28-citrics-b.herokuapp.com/cities/city/${cityId}`)
    .then(res => {
      dispatch({ type: MOVE_CITY_COMPARE, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: MOVE_CITY_ERROR, payload: err.message })
    })
}

export const removeCityFromCompare = cityId => dispatch => {
  dispatch({ type: REMOVE_CITY_TO_COMPARE, payload: cityId })
}

export const addFavorite = () => {
  //ACTION GOES HERE
}

export const removeFavorite = () => {
  //ACTION GOES HERE
}

export const getUserData = () => dispatch => {
  dispatch({ type: GET_USER_START })
  axios
    .get(`https://labs-28-citrics-b.herokuapp.com/users/user/1`)
    .then(res => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_USER_FAILURE, payload: err.message })
    })
}
