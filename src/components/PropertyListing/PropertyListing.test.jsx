import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PropertyListing } from './PropertyListing';

const propertyListing = {
  address: {
    city: 'Houston',
    streetName: 'East Sweet Bottom',
    streetNumber: '74434',
    state: 'Texas',
  },
  listDate: '2011-05-23T18:50:30.184391Z',
  listPrice: 20714261,
  mlsId: 1005192,
  photos: [
    'https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home9.jpg',
  ],
  property: {
    area: 1043,
    bathsFull: 5,
    bathsHalf: 5,
    bedrooms: 2,
  },
};

describe('<PropertyListing />', () => {
  describe('features', () => {
    test('the property photo is presented', () => {
      render(<PropertyListing listing={propertyListing} isFavorited />);

      const propertyPhoto = screen.getByAltText(
        /Property located at 74434 East Sweet Bottom, Houston, TX/,
      );

      expect(propertyPhoto).toBeInTheDocument();
      expect(propertyPhoto).toHaveProperty('src', propertyListing.photos[0]);
    });

    test('the property details are formatted and presented', () => {
      render(<PropertyListing listing={propertyListing} isFavorited />);

      const features = screen.getByText(/2BR | 7.5 Bath | 1043 Sq Ft/);
      const listPrice = screen.getByText(/\$20,714,261/);
      const address = screen.getByText(/74434 East Sweet Bottom, Houston, TX/);
      const dateOfListing = screen.getByText(/Listed: 5\/23\/11/);

      expect(features).toBeInTheDocument();
      expect(listPrice).toBeInTheDocument();
      expect(address).toBeInTheDocument();
      expect(dateOfListing).toBeInTheDocument();
    });

    describe('when the listing is a favorite', () => {
      test('the respective elements are rendered', () => {
        render(<PropertyListing listing={propertyListing} isFavorited />);

        const removeFavoriteButton = screen.getByRole('button', {
          label: /Remove from your favorites/,
        });
        const favoriteIcon = screen.getByAltText(/Favorite icon/);

        expect(removeFavoriteButton).toBeInTheDocument();
        expect(favoriteIcon).toBeInTheDocument();
      });
    });

    describe('when the listing is not a favorite', () => {
      test('the respective elements are rendered', () => {
        render(
          <PropertyListing listing={propertyListing} isFavorited={false} />,
        );

        const addFavoriteButton = screen.getByRole('button', {
          label: /Add your favorites/,
        });
        const unfavoriteIcon = screen.getByAltText(/Unfavorite icon/);

        expect(addFavoriteButton).toBeInTheDocument();
        expect(unfavoriteIcon).toBeInTheDocument();
      });
    });

    describe('when the listing favorite toggle is clicked', () => {
      test('prop:onFavorite is invoked', async () => {
        const onFavorite = jest.fn();
        render(
          <PropertyListing
            listing={propertyListing}
            isFavorited={false}
            onFavorite={onFavorite}
          />,
        );

        const addFavoriteButton = screen.getByRole('button', {
          label: /Add your favorites/,
        });

        expect(onFavorite).not.toHaveBeenCalled();

        await userEvent.click(addFavoriteButton);

        expect(onFavorite).toHaveBeenCalled();
      });
    });
  });
});
