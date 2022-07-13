import { HiSearch } from 'react-icons/hi';

import styles from './SearchButton.module.css';

/**
 * The button that open the search popup
 */
export const SearchButton = (props) => {
  const {
    // The function to set the name of the user we want to search
    setUsersSearch,
  } = props;

  return (
    <HiSearch
      className={styles.SearchButton}
      onClick={() => setUsersSearch('')}
      title={'Search User'}
    />
  );
};

export default SearchButton;
