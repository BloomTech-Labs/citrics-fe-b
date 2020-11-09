import {
  GET_CITIES_START,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
} from '../actions'

const initialApplicationState = {
  isLoading: false,

  errorMessage: null,

  cities: [],

  comparingCities: {
    cityOne: {},
    cityTwo: {},
    cityThree: {},
  },

  userPreferences: {
    favorites: [],
  },
}

export default function reducer(state = initialApplicationState, action) {
  switch (action.type) {
    case GET_CITIES_START:
      return { ...state, isLoading: true }
    case GET_CITIES_SUCCESS:
      return { ...state, cities: action.payload, isLoading: false }
    case GET_CITIES_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    default:
      return state
  }
}
