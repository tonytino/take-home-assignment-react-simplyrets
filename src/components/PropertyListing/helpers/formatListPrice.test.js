import { formatListPrice } from './formatListPrice';

describe('formatListPrice()', () => {
  describe('when the amount provided is compatiable', () => {
    test('the amount is returned in whole dollars format', () => {
      expect(formatListPrice(325999)).toEqual('$325,999');
      expect(formatListPrice(135123.42)).toEqual('$135,123');
    });
  });

  describe('when the amount provided is imcompatiable', () => {
    test('the amount is returned as received', () => {
      const imcompatiable = 'USD 189,999';

      expect(formatListPrice(imcompatiable)).toEqual(imcompatiable);
    });
  });
});
