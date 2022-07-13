import uuid from "react-uuid"

import ContactListItemUser from "../ContactListItemUser/ContactListItemUser"
import ContactListItemOptions from "../ContactListItemOptions/ContactListItemOptions"

import styles from "./ContactListItem.module.css"

export const ContactListItem = (props) => {
  const { user, deleteUser, selectUser, editUser } = props

  return (
    <div className={styles.ContactListItem} key={uuid()}>
      <ContactListItemUser selectUser={selectUser} user={user} />
      <ContactListItemOptions
        deleteUser={deleteUser}
        selectUser={selectUser}
        editUser={editUser}
      />
    </div>
  )
}

export default ContactListItem
