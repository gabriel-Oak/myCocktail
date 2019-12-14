import axios from 'axios';
import { api } from '../enviroments';

export const randomDrink = (navigate) => async dispatch => {
  try {

    dispatch({
      type: 'SENDING'
    });

    const { data: { drinks } } = await axios.get(api.random);

    dispatch({
      type: 'LOOKUP_DRINK',
      drink: drinks[0]
    });

    navigate('LookUp', { title: drinks[0].strDrink });

  } catch (e) {
    dispatch({
      type: 'SHOW_MODAL',
      modal: {
        text: 'Our Random Drinks Machine seams broken, try again later :(',
        title: 'Error'
      }
    });
  } finally {
    dispatch({
      type: 'COMPLETE'
    });
  }
}