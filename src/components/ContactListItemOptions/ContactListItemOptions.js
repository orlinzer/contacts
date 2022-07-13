
import { AiOutlineInfoCircle, AiOutlineUserDelete } from 'react-icons/ai';
import { RiUserSettingsLine } from 'react-icons/ri';

import ContactListItemOption from '../ContactListItemOption/ContactListItemOption';

import styles from './ContactListItemOptions.module.css';

export const ContactListItemOptions = (props) => {
  const {
    deleteUser,
    selectUser,
    editUser,
  } = props;

  return (
    <div
        className={styles.ContactListItemOptions}
    >
      <ContactListItemOption
        onClick={selectUser}
      >
        <AiOutlineInfoCircle title={'More Details'} />
      </ContactListItemOption>

      <ContactListItemOption
        onClick={editUser}
      >
        <RiUserSettingsLine title={'Set User'} />
      </ContactListItemOption>

      <ContactListItemOption
        onClick={deleteUser}
      >
        <AiOutlineUserDelete title={'Delete User'} />
      </ContactListItemOption>
    </div>
  );
};

export default ContactListItemOptions;
