const INITIAL_STATE = {
  loading: false,
  lookUpDrink: null
};

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SENDING':
      return { ...state, loading: true }

    case 'COMPLETE':
      return { ...state, loading: false }

    case 'LOOKUP_DRINK':
      return { ...state, lookUpDrink: action.drink }

    default:
      return state;
  }
}

export default mainReducer;
