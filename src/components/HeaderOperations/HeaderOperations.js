import AddUserButton from '../AddUserButton/AddUserButton';
import RemoveAllUsersButton from '../RemoveAllUsersButton/RemoveAllUsersButton';
import SearchButton from '../SearchButton/SearchButton';

import styles from './HeaderOperations.module.css';

/**
 * The section of operations in the header
 */
export const HeaderOperations = (props) => {
  const {
    // The function to set the name of the user we want to search
    setUsersSearch,
    // The function to set the user we want to set
    setUserSetter,
    // The function to set the UserPopup
    setUsers,
  } = props;

  return (
    <div className={styles.HeaderOperations}>
      <SearchButton setUsersSearch={setUsersSearch} />

      <AddUserButton setUserSetter={setUserSetter} />

      <RemoveAllUsersButton setUsers={setUsers} />
    </div>
  );
};

export default HeaderOperations;
