import * as React from 'react';
import { Outlet } from 'react-router';
import styles from './Layout.module.css';

/**
 * Renders the page wrapped in the web app's layout
 */
export function Layout() {
  return (
    <div className={styles.Layout}>
      <header className={styles.Header}>
        <h1 className={styles.PageName}>TODO</h1>
      </header>

      <main className={styles.PageContents}>
        <Outlet />
      </main>
    </div>
  );
}
