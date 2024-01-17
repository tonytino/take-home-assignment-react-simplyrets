// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
const formatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'numeric',
  year: '2-digit',
});

/**
 * Returns the date supplied in a short date formatting (e.g. 1/31/00)
 * @param {Date} listDate The date to format
 * @returns {string} The formatted date
 */
export function formatDateOfListing(listDate) {
  try {
    const date = new Date(listDate);
    const isValidDate = !isNaN(date);

    return `Listed: ${isValidDate ? formatter.format(date) : listDate}`;
  } catch (error) {
    console.error(
      'Something went wrong while trying to format the following listDate:',
      listDate,
      error,
    );

    return listDate;
  }
}
