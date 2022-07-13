import { AiOutlineUsergroupDelete } from 'react-icons/ai';

import styles from './RemoveAllUsersButton.module.css';

/**
 * A button that remove all the users from the app
 */
export const RemoveAllUsersButton = (props) => {
  const {
    // The function to set the users of the app
    setUsers,
  } = props;

  return (
    <AiOutlineUsergroupDelete
      className={styles.RemoveAllUsersButton}
      onClick={() => setUsers([])}
      title={'Delete All Contacts'}
    />
  );
};

export default RemoveAllUsersButton;
