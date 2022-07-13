
import { AiOutlineUserAdd } from 'react-icons/ai';

import styles from './AddUserButton.module.css';

export const AddUserButton = (props) => {
  const {
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
