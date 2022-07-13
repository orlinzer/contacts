import uuid from "react-uuid"

import ContactListItem from "../ContactListItem/ContactListItem"

import styles from "./ContactList.module.css"

export const ContactList = (props) => {
  const { users, setUsers, selectUser, setUserSetter, usersToPresent } = props

  return (
    <div className={styles.ContactList}>
      {usersToPresent && usersToPresent.length > 0 ? (
        <>
          {usersToPresent.map((user) => (
            <ContactListItem
              key={uuid()}
              user={user}
              deleteUser={() =>
                setUsers(
                  users.filter(
                    (tmpUser) =>
                      user.name.title !== tmpUser.name.title ||
                      user.name.first !== tmpUser.name.first ||
                      user.name.last !== tmpUser.name.last
                  )
                )
              }
              editUser={() => setUserSetter(user)}
              selectUser={() => {
                selectUser(user)
              }}
            />
          ))}
        </>
      ) : (
        <h2 className={styles.ContactListEmpty}>There are no users</h2>
      )}
    </div>
  )
}

export default ContactList
