import Avatar from "../Avatar/Avatar"

import styles from "./ContactListItemUser.module.css"

export const ContactListItemUser = (props) => {
  const { selectUser, user } = props

  return (
    <div
      className={styles.ContactListItemUser}
      onClick={() => selectUser()}
      title={"More Details"}
    >
      <Avatar
        name={`${user?.name?.first} ${user?.name?.last}`}
        src={user?.picture?.thumbnail}
      />
      <p>
        {user?.name?.title} {user?.name?.first} {user?.name?.last}
      </p>
    </div>
  )
}

export default ContactListItemUser
