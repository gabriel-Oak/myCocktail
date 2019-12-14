const INITIAL_STATE = {
  loading: false,
  lookUpDrink: null,
  modal: {
    visible: false,
    text: '',
    title: ''
  }
};

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SENDING':
      return { ...state, loading: true }

    case 'COMPLETE':
      return { ...state, loading: false }

    case 'LOOKUP_DRINK':
      return { ...state, lookUpDrink: action.drink }

    case 'SHOW_MODAL':
      return {
        ...state,
        modal: {
          visible: true,
          text: action.modal.text,
          title: action.modal.title
        }
      }

    case 'CLOSE_MODAL':      
      return {
        ...state,
        modal: {
          visible: false,
          text: '',
          title: ''
        }
      }

    default:
      return state;
  }
}

export default mainReducer;
