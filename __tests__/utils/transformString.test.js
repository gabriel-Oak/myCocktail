import transformString from '../../src/shared/utils/transformString';

describe('Transform String', () => {
  it('should transform the string', () => {
    const string = transformString('My Cocktail / Test');
    expect(string).toBe('My_cocktail_test');
  });

  it('should not crash', () => {
    const string = transformString();
    expect(string).toBe('');
  });
});