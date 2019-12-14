import moxios from 'moxios';
import { randomDrink } from '../../src/pages/mainActions';

describe('Main Actions', () => {
  const drinkMock = { strDrink: 'just a mocked drink' };
  let dispatch;
  let navigate;

  beforeEach(() => {
    moxios.install();
    dispatch = jest.fn();
    navigate = jest.fn();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should fetch a drink', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          drinks: [drinkMock]
        }
      });
    });

    await randomDrink(navigate)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOOKUP_DRINK',
      drink: drinkMock
    });

    expect(navigate).toHaveBeenCalledWith(
      'LookUp',
      { title: drinkMock.strDrink }
    );
  });

  it('should fail fetching a drink', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWithTimeout();
    });

    await randomDrink(navigate)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SHOW_MODAL',
      modal: {
        text: 'Our Random Drinks Machine seams broken, try again later :(',
        title: 'Error'
      }
    });

    expect(navigate.mock.calls.length).toBe(0);
  });

});