import Card from '../Card/Card';
import ContactList from '../ContactList/ContactList';

import styles from './SearchPopup.module.css';

/**
 * The search popup
 */
export const SearchPopup = (props) => {
  const {
    // The users of the app
    users,
    // The function to set the users of the app
    setUsers,
    // The name of the user we want to search
    usersSearch,
    // The function to set the name of the user we want to search
    setUsersSearch,
    // The user to show on the UserPopup
    selectUser,
    // The user we want to set
    userSetter,
    // The function to set the user we want to set
    setUserSetter,
  } = props;

  // Not rendering if the usersSearch is null
  if (usersSearch === null) {
    return null;
  }

  return (
    <Card
      color="white"
      close={() => {
        setUsersSearch(null);
      }}>
      <form
        className={styles.SearchForm}
        action=""
        method="get"
        onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.Input}
          type="search"
          placeholder="Search"
          value={usersSearch}
          onChange={(e) => setUsersSearch(e.target.value)}
        />
      </form>
      <ContactList
        users={users}
        setUsers={setUsers}
        usersToPresent={users.filter(
          (user) =>
            user.name.title.toLowerCase().includes(usersSearch.toLowerCase()) ||
            user.name.first.toLowerCase().includes(usersSearch.toLowerCase()) ||
            user.name.last.toLowerCase().includes(usersSearch.toLowerCase())
        )}
        selectUser={selectUser}
        userSetter={userSetter}
        setUserSetter={setUserSetter}
      />
    </Card>
  );
};

export default SearchPopup;
