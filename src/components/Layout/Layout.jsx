import * as React from 'react';
import { Outlet, useLocation } from 'react-router';
import styles from './Layout.module.css';

const PAGE_NAMES = {
  '/': 'Side',
  '/property-listings': 'Property Listings',
};

/**
 * Renders the page wrapped in the web app's layout while also updating the document.title
 */
export function Layout() {
  const location = useLocation();
  const pageName = PAGE_NAMES[location?.pathname] ?? 'Side';

  React.useEffect(() => {
    document.title = pageName;
  }, [pageName]);

  return (
    <div className={styles.Layout}>
      <header className={styles.Header}>
        <h1 className={styles.PageName}>{pageName}</h1>
      </header>

      <main className={styles.PageContents}>
        <Outlet />
      </main>
    </div>
  );
}
