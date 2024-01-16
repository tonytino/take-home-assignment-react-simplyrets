import { useRouteError } from 'react-router-dom';
import styles from './ErrorPage.module.css';

/**
 * Renders the error page, which provides some information about the error
 */
export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.ErrorPage}>
      <h1>Uh oh!</h1>

      <p>
        {error?.data ?? 'Sorry about that, it looks like something went wrong.'}
      </p>
    </div>
  );
}
