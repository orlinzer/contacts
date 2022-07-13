import Avatar from '../Avatar/Avatar';
import Card from '../Card/Card';

import styles from './UserPopup.module.css';

/**
 * The popup that show the user properties
 */
export const UserPopup = (props) => {
  const {
    // The user to show in the UserPopup
    userPopup,
    // The function to set the user to show in the UserPopup
    setUserPopup,
  } = props;

  // Not rendering if the userPopup not defined
  if (!userPopup) {
    return null;
  }

  return (
    <Card
      color="blue"
      close={() => {
        setUserPopup(null);
      }}>
      <Avatar
        name={`${userPopup?.name?.first} ${userPopup?.name?.last}`}
        src={userPopup?.picture?.large || '/logo.svg'}
        size={'large'}
      />
      <div className={styles.UserDetails}>
        <p className={styles.Field}>Name</p>
        <p>
          {userPopup?.name?.title} {userPopup?.name?.first}{' '}
          {userPopup?.name?.last}
        </p>

        <p className={styles.Field}>Phone</p>
        <p>{userPopup?.phone}</p>

        <p className={styles.Field}>Address</p>
        <p>
          {userPopup?.location?.street?.number}{' '}
          {userPopup?.location?.street?.name} {userPopup?.location?.city}{' '}
          {userPopup?.location?.state} {userPopup?.location?.country}{' '}
          {userPopup?.location?.postcode}
        </p>

        <p className={styles.Field}>Email</p>
        <p>{userPopup?.email}</p>

        <p className={styles.Field}>Note</p>
        <p>{userPopup?.note}</p>
      </div>
    </Card>
  );
};

export default UserPopup;
