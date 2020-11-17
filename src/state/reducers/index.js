import {
  GET_CITIES_START,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
  REMOVE_CITY_COMPARE,
  MOVE_CITY_COMPARE,
  MOVE_CITY_ERROR,
  REMOVE_CITY_TO_COMPARE,
} from '../actions'

const initialApplicationState = {
  isLoading: false,

  errorMessage: null,
  compareErrorMessage: null,
  cities: [],

  comparingCities: [],

  userPreferences: {
    favorites: [1],
    compareHistory: [],
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
    // case REMOVE_CITY_COMPARE:
    //   return {
    //     ...state,
    //     cities: {state.cities.filter(city => {
    //       return city.cityId != state.comparingCities.cityOne.cityId || city.cityId != state.comparingCities.cityTwo.cityId || city.cityId != state.comparingCities.cityThree.cityId
    //     })}
    //   }
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

    default:
      return state
  }
}
