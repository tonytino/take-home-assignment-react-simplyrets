import { redirect } from 'react-router-dom';

/**
 * Redirects to the /property-listings page as there won't be a home page
 */
export async function homePageLoader() {
  return redirect('/property-listings');
}

/**
 * Renders the home page
 */
export function HomePage() {
  return <></>;
}
