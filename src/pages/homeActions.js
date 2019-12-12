import axios from 'axios';
import { api } from '../enviroments';

export const randomDrink = () => async dispatch => {
  try {
    console.log('xau');
    
    dispatch({
      type: 'SENDING'
    });

    const {data} = await axios.get(api.random);
    console.log(data);
    
  } catch (e) {

  } finally {
    dispatch({
      type: 'COMPLETE'
    });
  }
}