/**
 * The utils here are just abstractions around localStorage for convenience
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */

/**
 * Returns the data found in local storage for the key provided
 * @param {string} key the key to look up
 * @returns {*} Data found
 */
export function getLocalStorageItem(key) {
  try {
    return JSON.parse(localStorage?.getItem(key));
  } catch (error) {
    console.error(
      `Something went wrong while trying to get the data for ${key} from local storage:`,
      error,
    );
  }
}

/**
 * Saves the key data pair in local storage
 * @param {string} key the key to save the data under
 * @param {*} data the data to save in association with the key
 * @returns {null}
 */
export function setLocalStorageItem(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(
      `Something went wrong while trying to save ${key} to local storage:`,
      error,
    );
  }
}
