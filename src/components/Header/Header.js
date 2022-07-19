import HeaderTitle from '../HeaderTitle/HeaderTitle';
import HeaderOperations from '../HeaderOperations/HeaderOperations';

import styles from './Header.module.css';

/**
 * The header of the app
 */
export const Header = (props) => {
  const {
    // The users of the app
    users,
    // The users setter of the app
    setUsers,
    // The function to set the UserPopup
    setUserPopup,
    // The function to set the name of the user we want to search
    setUsersSearch,
    // The function to set the user we want to set
    setUserSetter,
    // The function to set the error message
    setErrorMessage,
    // // The function that add an random user
    // addRandomUser,
  } = props;

  return (
    <header className={styles.Header}>
      <HeaderTitle
        setUserPopup={setUserPopup}
        setUsersSearch={setUsersSearch}
        setUserSetter={setUserSetter}
        setErrorMessage={setErrorMessage}
      />

      <HeaderOperations
        users={users}
        setUsersSearch={setUsersSearch}
        setUserSetter={setUserSetter}
        setUsers={setUsers}
        // addRandomUser={addRandomUser}
      />
    </header>
  );
};

export default Header;
