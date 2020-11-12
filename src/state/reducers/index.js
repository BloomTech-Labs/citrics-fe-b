import {
  GET_CITIES_START,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILURE,
  REMOVE_CITY_COMPARE,
  MOVE_CITY_COMPARE,
  MOVE_CITY_ERROR,
} from '../actions'

const initialApplicationState = {
  isLoading: false,

  errorMessage: null,
  compareErrorMessage: null,
  cities: [],

  // comparingCities: {
  //   cityOne: {},
  //   cityTwo: {},
  //   cityThree: {},
  // },
  comparingCities: [
    {
      cityName: 'Seattle, WA',
      cityId: 20,
      population: 3000000,
      rentRate: 1500,
      medIncome: 55000,
    },
    {
      cityName: 'Seattle, WA',
      cityId: 20,
      population: 3000000,
      rentRate: 1500,
      medIncome: 55000,
    },
  ],

  userPreferences: {
    favorites: [],
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
    default:
      return state
  }
}
