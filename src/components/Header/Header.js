import HeaderTitle from "../HeaderTitle/HeaderTitle"
import HeaderOperations from "../HeaderOperations/HeaderOperations"

import styles from "./Header.module.css"

export const Header = (props) => {
  const { users, setUsers, setUserPopup, setUsersSearch, setUserSetter } = props

  return (
    <header className={styles.Header}>
      <HeaderTitle
        setUserPopup={setUserPopup}
        setUsersSearch={setUsersSearch}
        setUserSetter={setUserSetter}
      />

      <HeaderOperations
        users={users}
        setUsersSearch={setUsersSearch}
        setUserSetter={setUserSetter}
        setUsers={setUsers}
      />
    </header>
  )
}

export default Header
