import Card from "../Card/Card"
import ContactList from "../ContactList/ContactList"

import styles from "./SearchPopup.module.css"

export const SearchPopup = (props) => {
  const {
    users,
    setUsers,
    usersSearch,
    setUsersSearch,
    selectUser,
    userSetter,
    setUserSetter,
  } = props

  if (usersSearch === null) {
    return null
  }

  return (
    <Card
      color="white"
      close={() => {
        setUsersSearch(null)
      }}
    >
      <form
        className={styles.SearchForm}
        action=""
        method="get"
        onSubmit={(e) => e.preventDefault()}
      >
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
  )
}

export default SearchPopup
