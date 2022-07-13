import Avatar from '../Avatar/Avatar';

import styles from './ContactListItemUser.module.css';

/**
 * The user section in ContactListItem
 */
export const ContactListItemUser = (props) => {
  const {
    // The select function
    selectUser,
    // The user to show
    user,
  } = props;

  return (
    <div
      className={styles.ContactListItemUser}
      onClick={() => selectUser()}
      title={'More Details'}>
      <Avatar
        name={`${user?.name?.first} ${user?.name?.last}`}
        src={user?.picture?.thumbnail}
      />
      <p>
        {user?.name?.title} {user?.name?.first} {user?.name?.last}
      </p>
    </div>
  );
};

export default ContactListItemUser;
