import axios from 'axios';
import { api } from '../../enviroments';

import transformString from '../../shared/utils/transformString';

export const fetchFilters = type => async dispatch => {
  try {
    dispatch({ type: 'SENDING' });
    dispatch({
      type: 'SELECTED_DRINK',
      index: null
    });

    const { data: { drinks } } = await axios.get(`${api.listFilters}?${type}=list`);

    const filters = drinkss.map(filter => {
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
    dispatch({
      type: 'SHOW_MODAL',
      modal: {
        text: 'Fetch filters went wrong, please try again later :(',
        title: 'Error'
      }
    });
  } finally {
    dispatch({ type: 'COMPLETE' });
  }
}

export const fetchDrinks = query => async dispatch => {
  try {
    dispatch({ type: 'SENDING' });
    dispatch({
      type: 'SELECTED_DRINK',
      index: null
    });

    const { data: { drinks } } = await axios.get(`${api.filter}?${query}`);

    dispatch({
      type: 'FETCH_DRINKS',
      drinks
    });

  } catch (e) {
    dispatch({
      type: 'SHOW_MODAL',
      modal: {
        text: 'We can\'t found drinks, for some unknow reason, please try again later :(',
        title: 'Error'
      }
    });
  } finally {
    dispatch({ type: 'COMPLETE' });
  }
}

export const lookUpDrink = (drinkId, navigate) => async dispatch => {
  try {
    dispatch({ type: 'SENDING' });
    dispatch({
      type: 'SELECTED_DRINK',
      index: drinkId
    });

    const { data: { drinks } } = await axios.get(`${api.lookup}?i=${drinkId}`);

    dispatch({
      type: 'LOOKUP_DRINK',
      drink: drinks[0]
    });

    navigate('LookUp', { title: drinks[0].strDrink });

  } catch (e) {
    dispatch({
      type: 'SHOW_MODAL',
      modal: {
        text: 'Sorry, we can\'t your drink, please try again later :(',
        title: 'Error'
      }
    });
  } finally {
    dispatch({ type: 'COMPLETE' });
    dispatch({
      type: 'SELECTED_DRINK',
      index: null
    });
  }
}

export const changeNameFilter = text => ({
  type: 'CHANGE_NAME_FILTER',
  text
});