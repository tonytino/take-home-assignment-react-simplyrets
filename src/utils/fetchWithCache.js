import { getLocalStorageItem, setLocalStorageItem } from 'utils';

const FETCH_CACHE_LOCAL_STORAGE_KEY = 'Side::FetchCache';

/**
 * Fetches data from a specified URL, first checking the local storage cache for a match and returning that, if found. If it does not exist in the cache, a GET request is made, and if successful, it will be saved to the cache and returned
 * @param {string} URL - The URL to fetch from
 * @param {string} fetchOptions - [Options supported by fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options)
 * @returns {Object} The data fetched
 */
export async function fetchWithCache(URL, fetchOptions = {}) {
  const fetchCache = getLocalStorageItem(FETCH_CACHE_LOCAL_STORAGE_KEY) ?? {};
  const fetchCacheEntry = fetchCache[URL];

  if (Boolean(fetchCacheEntry)) {
    return fetchCacheEntry;
  } else {
    const response = await fetch(URL, fetchOptions);

    if (!response.ok) {
      throw new Response('An unexpected error occurred while gathering data.', {
        status: 500,
      });
    }

    const json = await response.json();

    setLocalStorageItem(FETCH_CACHE_LOCAL_STORAGE_KEY, {
      ...fetchCache,
      [URL]: json,
    });

    return json;
  }
}
