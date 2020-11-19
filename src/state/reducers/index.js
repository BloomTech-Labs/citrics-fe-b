import {
  GET_CITIES_START,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
  MOVE_CITY_COMPARE,
  MOVE_CITY_ERROR,
  REMOVE_CITY_TO_COMPARE,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from '../actions'

import {
  ADD_FAVORITE_START,
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_FAILURE,
  REMOVE_FAVORITE_START,
  REMOVE_FAVORITE_SUCCESS,
  REMOVE_FAVORITE_FAILURE,
} from '../actions/userActions'

const initialApplicationState = {
  isLoading: false,
  favoriteLoading: false,

  errorMessage: null,
  compareErrorMessage: null,
  cities: [],

  comparingCities: [],

  user: {
    favoriteCities: [],
    compareHistory: [],
    userId: null,
    username: null,
    minPopulation: null,
    maxPopulation: null,
    minRent: null,
    maxRent: null,
    minHouseCost: null,
    maxHouseCost: null,
    costOfLiving: null,
  },
}

export default function reducer(state = initialApplicationState, action) {
  switch (action.type) {
    case GET_CITIES_START:
      return { ...state, isLoading: true, errorMessage: null }
    case GET_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        isLoading: false,
        errorMessage: null,
      }
    case GET_CITIES_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }
    case MOVE_CITY_COMPARE:
      if (state.comparingCities.length < 3) {
        return {
          ...state,
          comparingCities: [...state.comparingCities, action.payload],
        }
      } else {
        return {
          ...state,
          compareErrorMessage:
            'Limit of cities to compare has been reached! (3)',
        }
      }
    case MOVE_CITY_ERROR:
      return { ...state, errorMessage: action.payload }
    case REMOVE_CITY_TO_COMPARE:
      return {
        ...state,
        comparingCities: state.comparingCities.filter(city => {
          return city.cityId != action.payload
        }),
      }
    case GET_USER_START:
      return { ...state, isLoading: true, errorMessage: null }

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        errorMessage: null,
      }
    case GET_USER_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    case ADD_FAVORITE_START:
      return { ...state, favoriteLoading: true, errorMessage: null }

    case ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        favoriteLoading: false,
        errorMessage: null,
      }
    case ADD_FAVORITE_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    case REMOVE_FAVORITE_START:
      return { ...state, favoriteLoading: true, errorMessage: null }

    case REMOVE_FAVORITE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        favoriteLoading: false,
        errorMessage: null,
      }
    case REMOVE_FAVORITE_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    default:
      return state
  }
}
