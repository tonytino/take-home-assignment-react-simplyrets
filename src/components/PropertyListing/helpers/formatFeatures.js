/**
 * Returns the features for a property listing in a formatted fashion
 * @param {Object} property The property
 * @returns {string} The formatted features
 */
export function formatFeatures(property) {
  try {
    const { area = 0, bathsFull = 0, bathsHalf = 0, bedrooms = 0 } = property;

    return `${bedrooms} BR | ${bathsFull + bathsHalf / 2} Bath | ${area} Sq Ft`;
  } catch (error) {
    console.error(
      'Something went wrong while trying to format the following property:',
      property,
      error,
    );

    return property;
  }
}
