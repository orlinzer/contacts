import ContactListContact from "../ContactListContact/ContactListContact";
import ContactListDivider from "../ContactListDivider/ContactListDivider";
import ContactListHeader from "../ContactListHeader/ContactListHeader";

import styles from './ContactList.module.css';

import '../../modules/User';

/**
 * @typedef ContactListProperties
 * @type {object}
 * @property {User[]} users - users.
 */

/**
 *
 * @param {ContactListProperties} param0
 * @returns ContactListContact
 */
export const ContactList = ({users}) => {

  return (
    <div className={styles.ContactList}>
      <ContactListHeader />
      <ContactListDivider />

      {/* TODO: Add Contact */}
      {users.map((user) => (
        <ContactListContact user={user} />
      ))}
    </div>
  );
}

export default ContactList;
