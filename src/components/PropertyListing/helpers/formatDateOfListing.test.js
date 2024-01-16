import { formatDateOfListing } from './formatDateOfListing';

describe('formatDateOfListing()', () => {
  describe('when the date provided is compatiable', () => {
    test('the date is returned in a short format', () => {
      expect(formatDateOfListing('2011-05-23T18:50:30.184391Z')).toEqual(
        'Listed: 5/23/11',
      );
      expect(formatDateOfListing('1994-10-25T13:58:17.284009Z')).toEqual(
        'Listed: 10/25/94',
      );
    });
  });

  describe('when the date provided is imcompatiable', () => {
    test('the date is returned as received', () => {
      const imcompatiable = 'Yesterday';

      expect(formatDateOfListing(imcompatiable)).toEqual(
        `Listed: ${imcompatiable}`,
      );
    });
  });
});
