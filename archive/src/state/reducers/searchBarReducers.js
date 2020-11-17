const initState = {
  cityData: [],
  filter: '',
  loading: false,
  error: null,
};

export const searchBarReducers = (state = initState, action) => {
  switch (action.type) {
    case 'SEARCHBAR_FETCH_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'SEARCHBAR_FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        cityData: action.payload,
      };
    case 'SEARCHBAR_FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'SEARCHBAR_FILTER':
      return {
        ...state,
        filter: action.value,
      };
    default:
      return state;
  }
};
