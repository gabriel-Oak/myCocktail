const INITIAL_STATE = {
  categories: [],
  ingredients: [],
  glass: []
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_FILTERS_c':
      return { ...state, categories: action.filters }

    case 'FETCH_FILTERS_i':
      return { ...state, ingredients: action.filters }

    case 'FETCH_FILTERS_g':
      return { ...state, glass: action.filters }

    default:
      return state;
  }
}

export default listReducer;