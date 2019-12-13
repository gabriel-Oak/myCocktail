import axios from 'axios';
import { api } from '../../enviroments';

import transformString from '../../shared/utils/transformString';

export const fetchFilters = type => async dispatch => {
  try {
    dispatch({ type: 'SENDING' });

    const { data: { drinks } } = await axios.get(`${api.listFilters}?${type}=list`);

    const filters = drinks.map(filter => {      
      const label = filter.strGlass
        || filter.strCategory
        || filter.strIngredient1;

      const value = transformString( 
        filter.strGlass
        || filter.strCategory
        || filter.strIngredient1
      );

      return {
        label,
        value
      }
    });    

    dispatch({
      type: `FETCH_FILTERS_${type}`,
      filters
    });

  } catch (e) {

    console.log(e, 'erro');

  } finally {
    dispatch({ type: 'COMPLETE' });
  }
}