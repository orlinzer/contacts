import { AiOutlineInfoCircle, AiOutlineUserDelete } from 'react-icons/ai';
import { RiUserSettingsLine } from 'react-icons/ri';

import ContactListItemOption from '../ContactListItemOption/ContactListItemOption';

import styles from './ContactListItemOptions.module.css';

/**
 * A section of options in ContactListItem
 */
export const ContactListItemOptions = (props) => {
  const {
    // The delete function
    deleteUser,
    // The select function
    selectUser,
    // The edit function
    editUser,
  } = props;

  return (
    <div className={styles.ContactListItemOptions}>
      <ContactListItemOption onClick={selectUser}>
        <AiOutlineInfoCircle title={'More Details'} />
      </ContactListItemOption>

      <ContactListItemOption onClick={editUser}>
        <RiUserSettingsLine title={'Set User'} />
      </ContactListItemOption>

      <ContactListItemOption onClick={deleteUser}>
        <AiOutlineUserDelete title={'Delete User'} />
      </ContactListItemOption>
    </div>
  );
};

export default ContactListItemOptions;
