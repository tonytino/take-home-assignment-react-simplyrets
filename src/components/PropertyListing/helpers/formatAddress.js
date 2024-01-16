const STATE_ABBREVIATIONS = {
  arizona: 'AZ',
  alabama: 'AL',
  alaska: 'AK',
  arkansas: 'AR',
  california: 'CA',
  colorado: 'CO',
  connecticut: 'CT',
  delaware: 'DE',
  florida: 'FL',
  georgia: 'GA',
  hawaii: 'HI',
  idaho: 'ID',
  illinois: 'IL',
  indiana: 'IN',
  iowa: 'IA',
  kansas: 'KS',
  kentucky: 'KY',
  louisiana: 'LA',
  maine: 'ME',
  maryland: 'MD',
  massachusetts: 'MA',
  michigan: 'MI',
  minnesota: 'MN',
  mississippi: 'MS',
  missouri: 'MO',
  montana: 'MT',
  nebraska: 'NE',
  nevada: 'NV',
  'new hampshire': 'NH',
  'new jersey': 'NJ',
  'new mexico': 'NM',
  'new york': 'NY',
  'north carolina': 'NC',
  'north dakota': 'ND',
  ohio: 'OH',
  oklahoma: 'OK',
  oregon: 'OR',
  pennsylvania: 'PA',
  'rhode island': 'RI',
  'south carolina': 'SC',
  'south dakota': 'SD',
  tennessee: 'TN',
  texas: 'TX',
  utah: 'UT',
  vermont: 'VT',
  virginia: 'VA',
  washington: 'WA',
  'west virginia': 'WV',
  wisconsin: 'WI',
  wyoming: 'WY',
};

/**
 * Returns the formatted address for a property listing
 *
 * @param {Object} address - The address object from the property listing
 * @returns {string} formattedAddress
 */
export function formatAddress(address) {
  try {
    const {
      city = 'Undisclosed',
      streetName = 'Undisclosed',
      streetNumber = 'Undisclosed',
      state = 'Undisclosed',
    } = address;

    const stateAbbreviation =
      STATE_ABBREVIATIONS[state?.toLowerCase()] ?? state;

    return `${streetNumber} ${streetName}, ${city}, ${stateAbbreviation}`;
  } catch (error) {
    console.error(
      'Something went wrong while trying to format the following address:',
      address,
      error,
    );

    return address;
  }
}
