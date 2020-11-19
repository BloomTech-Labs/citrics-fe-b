import axios from 'axios'

export const ADD_FAVORITE_START = 'ADD_FAVORITE_START'
export const ADD_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS'
export const ADD_FAVORITE_FAILURE = 'ADD_FAVORITE_FAILURE'

export const REMOVE_FAVORITE_START = 'ADD_FAVORITE_START'
export const REMOVE_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS'
export const REMOVE_FAVORITE_FAILURE = 'ADD_FAVORITE_FAILURE'

export const addFavorite = cityId => dispatch => {
  dispatch({ type: ADD_FAVORITE_START })
  axios
    .post(`https://labs-28-citrics-b.herokuapp.com/cities/favorite/${cityId}`)
    .then(res => {
      dispatch({ type: ADD_FAVORITE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ADD_FAVORITE_FAILURE, payload: err.message })
    })
}


export const removeFavorite = cityId => dispatch => {
  dispatch({ type: REMOVE_FAVORITE_START })
  axios
    .delete(`https://labs-28-citrics-b.herokuapp.com/cities/favorite/${cityId}`)
    .then(res => {
      dispatch({ type: REMOVE_FAVORITE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: REMOVE_FAVORITE_FAILURE, payload: err.message })
    })
}
