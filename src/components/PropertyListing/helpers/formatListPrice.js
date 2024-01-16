// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
const formatter = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  maximumFractionDigits: 0,
  style: 'currency',
});

/**
 * Returns the amount supplied in currency formatting (whole USD specifically)
 * @param {number} listPrice The amount to format
 * @returns {string} The formatted amount
 */
export function formatListPrice(listPrice) {
  try {
    return typeof listPrice === 'number'
      ? formatter.format(listPrice)
      : listPrice;
  } catch (error) {
    console.error(
      'Something went wrong while trying to format the following listPrice:',
      listPrice,
      error,
    );

    return listPrice;
  }
}
