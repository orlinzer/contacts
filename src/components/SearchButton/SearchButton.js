import { HiSearch } from "react-icons/hi"

import styles from "./SearchButton.module.css"

export const SearchButton = (props) => {
  const { setUsersSearch } = props

  return (
    <HiSearch
      className={styles.SearchButton}
      onClick={() => setUsersSearch("")}
      title={"Search User"}
    />
  )
}

export default SearchButton
