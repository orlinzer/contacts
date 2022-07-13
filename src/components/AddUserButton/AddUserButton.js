import { AiOutlineUserAdd } from 'react-icons/ai';

import styles from './AddUserButton.module.css';

/**
 * The button that add user
 */
export const AddUserButton = (props) => {
  const {
    // The user we want to set
    setUserSetter,
  } = props;

  return (
    <AiOutlineUserAdd
      className={styles.AddUserButton}
      onClick={() => setUserSetter({})}
      title={'Add New User'}
    />
  );
};

export default AddUserButton;
