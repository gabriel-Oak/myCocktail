import listReducer from "../../src/pages/List/listReducer";

describe('List Reducer', () => {

  const filtersMock = [{ label: 'Mock' }];


  it('FETCH_FILTERS_c', () => {

    const res = listReducer(undefined, {
      type: 'FETCH_FILTERS_c',
      filters: filtersMock
    });

    expect(res.categories).toEqual(filtersMock);
  });

  it('FETCH_FILTERS_i', () => {

    const res = listReducer(undefined, {
      type: 'FETCH_FILTERS_i',
      filters: filtersMock
    });

    expect(res.ingredients).toEqual(filtersMock);
  });

  it('FETCH_FILTERS_g', () => {

    const res = listReducer(undefined, {
      type: 'FETCH_FILTERS_g',
      filters: filtersMock
    });

    expect(res.glass).toEqual(filtersMock);
  });


  it('FETCH_DRINKS', () => {
    const drinksMock = [{ name: 'Mock drink' }];

    const res = listReducer(undefined, {
      type: 'FETCH_DRINKS',
      drinks: drinksMock
    });

    expect(res.drinks).toEqual(drinksMock);
  });

  it('CHANGE_NAME_FILTER', () => {

    const res = listReducer(undefined, {
      type: 'CHANGE_NAME_FILTER',
      text: 'Mocha'
    });

    expect(res.nameFilter).toBe('Mocha');
  });

  it('SELECTED_DRINK', () => {

    const res = listReducer(undefined, {
      type: 'SELECTED_DRINK',
      index: 3
    });

    expect(res.selectedDrink).toBe(3);
  });

  it('Default', () => {

    const res = listReducer(filtersMock, { type: 'UNKNOW' });

    expect(res).toEqual(filtersMock);
  });

});