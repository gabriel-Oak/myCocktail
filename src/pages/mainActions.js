import axios from 'axios';
import { api } from '../enviroments';

export const randomDrink = (navigate) => async dispatch => {
  try {
    console.log('1');

    dispatch({
      type: 'SENDING'
    });

    const { data: { drinks } } = await axios.get(api.random);

    dispatch({
      type: 'LOOKUP_DRINK',
      drink: drinks[0]
    });

    navigate('LookUp');
    
  } catch (e) {
    console.log(e);

  } finally {
    dispatch({
      type: 'COMPLETE'
    });
  }
}