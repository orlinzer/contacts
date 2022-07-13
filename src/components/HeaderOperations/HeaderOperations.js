import AddUserButton from "../AddUserButton/AddUserButton"
import RemoveAllUsersButton from "../RemoveAllUsersButton/RemoveAllUsersButton"
import SearchButton from "../SearchButton/SearchButton"

import styles from "./HeaderOperations.module.css"

export const HeaderOperations = (props) => {
  const { setUsersSearch, setUserSetter, setUsers } = props

  return (
    <div className={styles.HeaderOperations}>
      <SearchButton setUsersSearch={setUsersSearch} />

      <AddUserButton setUserSetter={setUserSetter} />

      <RemoveAllUsersButton setUsers={setUsers} />
    </div>
  )
}

export default HeaderOperations
