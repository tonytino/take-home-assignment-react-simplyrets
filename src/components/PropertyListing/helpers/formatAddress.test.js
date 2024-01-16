import { formatAddress } from './formatAddress';

const address = {
  city: 'Big City',
  state: 'California',
  streetName: 'Main St',
  streetNumber: '123',
};

describe('formatAddress()', () => {
  describe('features', () => {
    describe('when the state name is recognized', () => {
      test('it is formatted as an abbreviation', () => {
        expect(formatAddress(address)).toEqual(`123 Main St, Big City, CA`);
      });
    });

    describe('when the state name is unrecognized', () => {
      test('the input value is returned as received', () => {
        const unknown = 'unknown';

        expect(formatAddress({ ...address, state: unknown })).toEqual(
          `123 Main St, Big City, ${unknown}`,
        );
      });
    });

    describe('when the city is missing', () => {
      test("it is rendered as 'Undisclosed'", () => {
        expect(formatAddress({ ...address, city: undefined })).toEqual(
          '123 Main St, Undisclosed, CA',
        );
      });
    });

    describe('when the state name is missing', () => {
      test("it is rendered as 'Undisclosed'", () => {
        expect(formatAddress({ ...address, state: undefined })).toEqual(
          '123 Main St, Big City, Undisclosed',
        );
      });
    });

    describe('when the streetName is missing', () => {
      test("it is rendered as 'Undisclosed'", () => {
        expect(formatAddress({ ...address, streetName: undefined })).toEqual(
          '123 Undisclosed, Big City, CA',
        );
      });
    });

    describe('when the streetNumber is missing', () => {
      test("it is rendered as 'Undisclosed'", () => {
        expect(formatAddress({ ...address, streetNumber: undefined })).toEqual(
          'Undisclosed Main St, Big City, CA',
        );
      });
    });
  });
});
