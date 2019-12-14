import { fetchFilters, fetchDrinks, lookUpDrink, changeNameFilter } from "../../src/pages/List/listActions";
import moxios from "moxios";

describe('List Actions', () => {
  let dispatch;
  let navigate;
  const mock = [
    { strGlass: 'American Cup' },
    { strGlass: 'Chineese Cup' }
  ];

  const setUpRequest = response => moxios.wait(() => {

    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response
    });
  });

  beforeEach(() => {
    moxios.install();
    dispatch = jest.fn();
    navigate = jest.fn();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should fetch filters', async () => {
    setUpRequest({
      drinks: mock
    });

    await fetchFilters('g')(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: `FETCH_FILTERS_g`,
      filters: [
        { label: 'American Cup', value: 'American_cup' },
        { label: 'Chineese Cup', value: 'Chineese_cup' }
      ]
    });
  });

  it('should fail fetch filters', async () => {
    setUpRequest();

    await fetchFilters('g')(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SHOW_MODAL',
      modal: {
        text: 'Fetch filters went wrong, please try again later :(',
        title: 'Error'
      }
    });
  });

  it('should fetch drinks', async () => {
    setUpRequest({
      drinks: mock
    });

    await fetchDrinks('?i=g')(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'FETCH_DRINKS',
      drinks: mock
    });
  });

  it('should fail fetch drinks', async () => {
    setUpRequest();

    await fetchDrinks('?i=g')(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SHOW_MODAL',
      modal: {
        text: 'We can\'t found drinks, for some unknow reason, please try again later :(',
        title: 'Error'
      }
    });
  });

  it('should look up a drink', async () => {
    setUpRequest({
      drinks: mock
    });

    await lookUpDrink(1231, navigate)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOOKUP_DRINK',
      drink: mock[0]
    });
  });

  it('should fail look up drink', async () => {
    setUpRequest();

    await lookUpDrink(1231, navigate)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SHOW_MODAL',
      modal: {
        text: 'Sorry, we can\'t find your drink, please try again later :(',
        title: 'Error'
      }
    });
  });

  it('should', () => {
    const res = changeNameFilter('mocking a mock');
    expect(res).toEqual({
      type: 'CHANGE_NAME_FILTER',
      text: 'mocking a mock'
    });
  });

});