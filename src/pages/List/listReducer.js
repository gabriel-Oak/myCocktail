const INITIAL_STATE = {
  categories: [],
  ingredients: [],
  glass: [],
  drinks: [],
  nameFilter: ''
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_FILTERS_c':
      return { ...state, categories: action.filters }

    case 'FETCH_FILTERS_i':
      return { ...state, ingredients: action.filters }

    case 'FETCH_FILTERS_g':
      return { ...state, glass: action.filters }

    case 'FETCH_DRINKS':
      return { ...state, drinks: action.drinks }

    case 'CHANGE_NAME_FILTER':
      return { ...state, nameFilter: action.text }

    case 'SELECTED_DRINK':
      return { ...state, selectedDrink: action.index }

    default:
      return state;
  }
}

export default listReducer;
