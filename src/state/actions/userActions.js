import axios from 'axios'

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

export const addFavorite = () => dispatch => {
  dispatch({ type: ADD_FAVORITE })
}
