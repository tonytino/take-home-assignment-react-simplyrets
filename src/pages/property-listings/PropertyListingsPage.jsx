import * as React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  fetchWithCache,
  getLocalStorageItem,
  setLocalStorageItem,
} from 'utils';
import { PropertyListing } from 'components';
import styles from './PropertyListingsPage.module.css';

const FAVORITES_LOCAL_STORAGE_KEY = 'Side::Favorites';

/**
 * Fetches property listings data for <PropertyListingsPage />
 * @returns {Object[]} Property Listings Data
 */
export async function propertyListingsPageLoader() {
  const properties = await fetchWithCache(
    'https://api.simplyrets.com/properties',
    {
      headers: {
        // Normally, we'd abstract away the credentials below, but these are not actually secrets as they're the demo creds provided by https://api.simplyrets.com for testing
        Authorization: `Basic ${btoa('simplyrets:simplyrets')}`,
      },
    },
  );

  return properties;
}

/**
 * Renders the property listings page, presenting properties that can be favorited
 */
export function PropertyListingsPage() {
  const properties = useLoaderData();

  const [favoritePropertyListings, setFavoritePropertyListings] =
    React.useState(getLocalStorageItem(FAVORITES_LOCAL_STORAGE_KEY) ?? []);

  return (
    <div className={styles.PropertyListings}>
      {properties.map((property) => {
        const { mlsId } = property;
        const isFavorited = favoritePropertyListings.includes(mlsId);

        return (
          <PropertyListing
            isFavorited={isFavorited}
            key={mlsId}
            listing={property}
            onFavorite={() => {
              setFavoritePropertyListings((favorites) => {
                const newFavorites = isFavorited
                  ? favorites.filter((favorite) => favorite !== mlsId)
                  : [...favorites, mlsId];

                setLocalStorageItem(FAVORITES_LOCAL_STORAGE_KEY, newFavorites);

                return newFavorites;
              });
            }}
          />
        );
      })}
    </div>
  );
}
