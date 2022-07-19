import AddUserButton from '../AddUserButton/AddUserButton';
import RandomUserButton from '../RandomUserButton/RandomUserButton';
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
    // // The function that add an random user
    // addRandomUser,
  } = props;

  return (
    <div className={styles.HeaderOperations}>
      <SearchButton setUsersSearch={setUsersSearch} />

      <AddUserButton setUserSetter={setUserSetter} />

      <RemoveAllUsersButton setUsers={setUsers} />

      {/* <RandomUserButton addRandomUser={addRandomUser} /> */}
    </div>
  );
};

export default HeaderOperations;
