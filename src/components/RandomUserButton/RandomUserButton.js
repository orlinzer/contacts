import { FaUserAstronaut } from 'react-icons/fa';

import styles from './RandomUserButton.module.css';

/**
 * The button that add an random user
 */
export const RandomUserButton = (props) => {
  const {
    // The function that add an random user
    addRandomUser,
  } = props;

  return (
    <FaUserAstronaut
      className={styles.SearchButton}
      onClick={addRandomUser}
      title={'Add Random User'}
    />
  );
};

export default RandomUserButton;
