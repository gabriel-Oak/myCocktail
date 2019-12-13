
import mainReducer from '../src/pages/mainReducer';

it('should set the drink', () => {
  const result = mainReducer(null, { type: 'LOOKUP_DRINK', drink: { drink: 'mock' } });
  expect(result.lookUpDrink).toEqual({ drink: 'mock' });
});
