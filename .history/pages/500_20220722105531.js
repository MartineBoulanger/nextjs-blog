// This is a custom 404 error page

import utilStyles from '../styles/utils.module.css';

export default function Custom500() {
  return (
    <h1 className={utilStyles.headingXl}>
      Error! 500 - A server error occurred...
    </h1>
  );
}
