import { formatFeatures } from './formatFeatures';

const property = {
  area: 1000,
  bathsFull: 1,
  bathsHalf: 2,
  bedrooms: 2,
};

describe('formatFeatures()', () => {
  test('formats the features of a property', () => {
    expect(formatFeatures(property)).toEqual('2 BR | 2 Bath | 1000 Sq Ft');
  });

  describe('when there are is one half bathrooms', () => {
    test('the total number of bathrooms are calculated correctly', () => {
      expect(formatFeatures({ ...property, bathsHalf: 1 })).toEqual(
        '2 BR | 1.5 Bath | 1000 Sq Ft',
      );
    });
  });

  describe('when there are two half bathrooms', () => {
    test('the total number of bathrooms are calculated correctly', () => {
      expect(formatFeatures({ ...property, bathsHalf: 2 })).toEqual(
        '2 BR | 2 Bath | 1000 Sq Ft',
      );
    });
  });
});
