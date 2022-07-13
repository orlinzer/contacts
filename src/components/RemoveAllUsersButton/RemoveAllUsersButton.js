import { AiOutlineUsergroupDelete } from "react-icons/ai"

import styles from "./RemoveAllUsersButton.module.css"

export const RemoveAllUsersButton = (props) => {
  const { setUsers } = props

  return (
    <AiOutlineUsergroupDelete
      className={styles.RemoveAllUsersButton}
      onClick={() => setUsers([])}
      title={"Delete All Contacts"}
    />
  )
}

export default RemoveAllUsersButton
