import heartFill from 'assets/heart-fill.svg';
import heartStroke from 'assets/heart-stroke.svg';
import {
  formatAddress,
  formatDateOfListing,
  formatFeatures,
  formatListPrice,
} from './helpers';
import styles from './PropertyListing.module.css';

/**
 * Renders a property listing's details, which can be favorited
 * @param {Object} props
 */
export function PropertyListing(props) {
  const { isFavorited = false, listing = {}, onFavorite = () => {} } = props;
  const {
    address = {},
    listDate = '',
    listPrice = 0,
    photos = [],
    property = {},
  } = listing;
  const photoSrc = photos[0];

  const favoriteToggleButtonLabel = `${isFavorited ? 'Remove from' : 'Add to'} your favorites`;

  const formattedAddress = formatAddress(address);

  return (
    <div className={styles.PropertyListing}>
      <button
        aria-label={favoriteToggleButtonLabel}
        className={styles.FavoriteToggle}
        onClick={onFavorite}
      >
        {isFavorited ? (
          <img alt="Favorite icon" height={48} src={heartFill} width={48} />
        ) : (
          <img alt="Unfavorite icon" height={48} src={heartStroke} width={48} />
        )}
      </button>

      <img
        alt={`Property located at ${formattedAddress}`}
        className={styles.Image}
        height={240}
        src={photoSrc}
        width={320}
      />

      <p className={styles.Features}>{formatFeatures(property)}</p>

      <p className={styles.ListPrice}>{formatListPrice(listPrice)}</p>

      <p className={styles.Address}>{formattedAddress}</p>

      <p className={styles.DateOfListing}>{formatDateOfListing(listDate)}</p>
    </div>
  );
}
