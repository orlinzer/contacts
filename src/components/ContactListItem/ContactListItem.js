import uuid from 'react-uuid';

import ContactListItemUser from '../ContactListItemUser/ContactListItemUser';
import ContactListItemOptions from '../ContactListItemOptions/ContactListItemOptions';

import styles from './ContactListItem.module.css';

/**
 * An item in ContactList
 */
export const ContactListItem = (props) => {
  const {
    // The user to show
    user,
    // The delete function to delete the user
    deleteUser,
    // The select function to show the user
    selectUser,
    // The edit function to edit the user
    editUser,
  } = props;

  return (
    <div className={styles.ContactListItem} key={uuid()}>
      <ContactListItemUser selectUser={selectUser} user={user} />
      <ContactListItemOptions
        deleteUser={deleteUser}
        selectUser={selectUser}
        editUser={editUser}
      />
    </div>
  );
};

export default ContactListItem;
