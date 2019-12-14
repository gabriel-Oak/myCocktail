import mainReducer from "../../src/pages/mainReducer";

describe('Main Reducer', () => {

  it('SENDING', () => {
    const res = mainReducer(undefined, { type: 'SENDING' });
    expect(res.loading).toBe(true);
  });

  it('COMPLETE', () => {
    const res = mainReducer(undefined, { type: 'COMPLETE' });
    expect(res.loading).toBe(false);
  });

  it('LOOKUP_DRINK', () => {
    const drinkMock = { name: 'Mock Cocktail ' }

    const res = mainReducer(undefined, {
      type: 'LOOKUP_DRINK',
      drink: drinkMock
    });

    expect(res.lookUpDrink).toEqual(drinkMock);
  });

  it('SHOW_MODAL', () => {
    const modalMock = {
      title: 'Mocked Title',
      text: 'Hello, testing is fun'
    }

    const res = mainReducer(undefined, {
      type: 'SHOW_MODAL',
      modal: modalMock
    });

    expect(res.modal).toEqual({
      visible: true,
      title: modalMock.title,
      text: modalMock.text
    });
  });

  it('CLOSE_MODAL', () => {
    const res = mainReducer(undefined, { type: 'CLOSE_MODAL' });
    expect(res.modal).toEqual({
      visible: false,
      title: '',
      text: ''
    });
  });

  it('Default', () => {
    const mockedState = {
      loading: true,
      lookUpDrink: { title: 'Mock' }
    }
    const res = mainReducer(mockedState, { type: 'UNKNOW' });

    expect(res).toEqual(mockedState);
  });

});