import * as React from 'react';
import { useLoaderData } from 'react-router-dom';
// import styles from './PropertyListingsPage.module.css';

/**
 * Fetches property listings data for <PropertyListingsPage />
 * @returns {Object[]} Property Listings Data
 */
export async function propertyListingsPageLoader() {
  // TODO
  return [];
}

/**
 * Renders the property listings page, presenting properties that can be favorited
 */
export function PropertyListingsPage() {
  const properties = useLoaderData();
  console.log(properties);

  return <h1>Property Listings Page</h1>;
}
