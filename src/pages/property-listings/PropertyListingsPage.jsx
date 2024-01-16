import * as React from 'react';
import { useLoaderData } from 'react-router-dom';
import { fetchWithCache } from 'utils';
import { PropertyListing } from 'components';
import styles from './PropertyListingsPage.module.css';

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

  return (
    <div className={styles.PropertyListings}>
      {properties.map((property) => {
        const { mlsId } = property;

        return (
          <PropertyListing
            isFavorited={false}
            key={mlsId}
            listing={property}
            onFavorite={() => {
              console.log('TODO');
            }}
          />
        );
      })}
    </div>
  );
}
